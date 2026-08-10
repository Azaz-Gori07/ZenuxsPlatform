import React, { useRef, useEffect, useState } from 'react';
import { ecosystemNodes, EcosystemNode } from '../../data/ecosystem';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ExternalLink, Sparkles, Network } from 'lucide-react';

export const EcosystemConstellation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(ecosystemNodes[0]);
  const [hoveredNode, setHoveredNode] = useState<EcosystemNode | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    let angleX = 0.2;
    let angleY = 0;
    let targetAngleX = 0.2;
    let targetAngleY = 0;
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetAngleY = x * 0.8;
      targetAngleX = -y * 0.8;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      if (!prefersReduced) {
        angleX += (targetAngleX - angleX) * 0.05;
        angleY += (targetAngleY - angleY) * 0.05;
        // Subtle constant rotation
        targetAngleY += 0.001;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const fov = 350;
      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D coordinates to 2D screen
      const projectedNodes = ecosystemNodes.map((node) => {
        // Rotate Y
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;

        // Rotate X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX + 180; // Distance offset

        const scale = fov / Math.max(z2, 10);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return {
          node,
          px,
          py,
          scale,
          z: z2
        };
      });

      // Sort by depth
      projectedNodes.sort((a, b) => b.z - a.z);

      // Draw connection lines
      for (const p of projectedNodes) {
        for (const targetId of p.node.connections) {
          const target = projectedNodes.find((n) => n.node.id === targetId);
          if (target) {
            ctx.beginPath();
            ctx.moveTo(p.px, p.py);
            ctx.lineTo(target.px, target.py);
            const isHighlighted =
              selectedNode?.id === p.node.id ||
              selectedNode?.id === target.node.id ||
              hoveredNode?.id === p.node.id ||
              hoveredNode?.id === target.node.id;

            ctx.strokeStyle = isHighlighted
              ? 'rgba(218, 92, 44, 0.45)'
              : 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = isHighlighted ? 1.5 : 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of projectedNodes) {
        const isSelected = selectedNode?.id === p.node.id;
        const isHovered = hoveredNode?.id === p.node.id;
        const size = Math.max(3, (isSelected || isHovered ? 8 : 5) * (p.scale / 2));

        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fillStyle = p.node.color;
        ctx.shadowColor = p.node.color;
        ctx.shadowBlur = isSelected || isHovered ? 12 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label
        ctx.fillStyle = isSelected || isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.6)';
        ctx.font = `${Math.max(10, Math.round(11 * (p.scale / 2.5)))}px Space Grotesk, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(p.node.name, p.px, p.py + size + 12);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedNode, hoveredNode, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl border border-border bg-graphite p-4 sm:p-6 shadow-2xl space-y-4 relative overflow-hidden"
    >
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-3 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-ember/10 border border-ember/20 text-ember">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Zenuxs Spatial Ecosystem Constellation
            </h4>
            <p className="text-xs text-ash font-mono">Interactive 3D System Topology</p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-ash flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-ember" /> Hover nodes to explore relationships
        </span>
      </div>

      {/* 3D Canvas Visualizer */}
      <div className="relative w-full h-[320px] sm:h-[380px] bg-void rounded-lg border border-border/80 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Selected Node Drawer */}
        {selectedNode && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-carbon/95 backdrop-blur border border-border rounded-lg p-3.5 shadow-xl space-y-1.5 z-20 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-white text-sm">{selectedNode.name}</span>
              <span className="text-[10px] text-ember uppercase bg-ember/10 px-2 py-0.5 rounded border border-ember/20">
                {selectedNode.category}
              </span>
            </div>
            <p className="text-fog text-xs font-sans">{selectedNode.shortDesc}</p>
            <div className="flex items-center justify-between pt-1 border-t border-border/40">
              <span className="text-[10px] text-steel">
                Connections: {selectedNode.connections.length} nodes
              </span>
              <a
                href={selectedNode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ember hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Launch</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Fast Node Selector Strip */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {ecosystemNodes.map((n) => (
          <button
            key={n.id}
            onClick={() => setSelectedNode(n)}
            onMouseEnter={() => setHoveredNode(n)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              selectedNode?.id === n.id
                ? 'bg-iron text-white font-bold border border-ember'
                : 'bg-carbon text-ash hover:text-fog border border-border'
            }`}
          >
            {n.name}
          </button>
        ))}
      </div>
    </div>
  );
};
