Installation

Get started with Agentation in your project
Choose your setup

    Just want annotations? → Basic Setup below (copy-paste to agent)
    Using Claude Code? → Add the /agentation skill (sets up component + MCP server)
    Building a custom agent? → Run MCP server manually for real-time sync

Most users: Basic Setup. Claude Code users: Use the skill for full auto-setup.
Install the package

npm install agentation -D

Or use yarn
, pnpm
, or bun

.
Add to your app

Add the component anywhere in your React app, ideally at the root level. The NODE_ENV check ensures it only loads in development.

import { Agentation } from "agentation";

function App() {
  return (
    <>
      <YourApp />
      {process.env.NODE_ENV === "development" && <Agentation />}
    </>
  );
}

Claude Code

If you use Claude Code, you can set up Agentation automatically with the /agentation skill. Install it:

npx skills add benjitaylor/agentation

Then in Claude Code:

/agentation

Detects your framework, installs the package, wires it into your layout, and recommends MCP server setup.
Agent Integration Recommended

Connect Agentation to any AI coding agent that supports MCP. This enables real-time annotation syncing and bidirectional communication.
1. Add the MCP server to your agent

The easiest way to configure Agentation across any supported agent (Claude Code, Cursor, Codex, Windsurf, and more):

npx add-mcp "npx -y agentation-mcp server"

Uses add-mcp to auto-detect your installed agents and write the correct config. Supports 9+ agents.

Or use the interactive wizard for Claude Code specifically:

npx agentation-mcp init

2. Verify setup

Check that everything is configured correctly:

npx agentation-mcp doctor

The server runs on port 4747 by default. Use --port 8080 to change it.
3. Connect the component

Point the React component to your server:

<Agentation
  endpoint="http://localhost:4747"
  onSessionCreated={(sessionId) => {
    console.log("Session started:", sessionId);
  }}
/>

Annotations are stored locally and synced to the server when connected.

    Local-first — Works offline, syncs when server is available
    Session continuity — Rejoins the same session on page refresh
    No duplicates — Only new annotations are uploaded; existing ones are skipped
    Server authority — Agent changes (resolve, dismiss) take precedence on rejoin

This means you can annotate freely, refresh the page, and the agent will see a continuous session rather than fragmented duplicates.

Other agents: Any tool that supports MCP can connect. Use npx add-mcp "npx -y agentation-mcp server" to auto-configure, or manually point your agent's MCP config to the Agentation server. Once connected, the agent will have access to tools like agentation_get_all_pending, agentation_list_sessions, and agentation_resolve.
Requirements

    React 18+ — Uses modern React features
    Client-side only — Requires DOM access
    Desktop only — Not optimized for mobile devices
    Zero dependencies — No runtime deps beyond React

Props

All props are optional. The component works with zero configuration.
Callbacks
onAnnotationAdd	Fired when an annotation is added
onAnnotationDelete	Fired when an annotation is deleted
onAnnotationUpdate	Fired when an annotation comment is edited
onAnnotationsClear	Fired when all annotations are cleared
onCopy	Fired when copy button is clicked (receives markdown)
onSubmit	Fired when "Send Annotations" is clicked
Behavior
copyToClipboard	Auto-copy on add (default: true)
className	Custom class for positioning or z-index adjustments
Agent Sync
endpoint	Server URL (e.g., "http://localhost:4747")
sessionId	Join an existing session (optional)
onSessionCreated	Fired when new session is created (receives sessionId: string)

See API for full props reference and HTTP endpoints.
Security notes

Agentation runs in your browser and reads DOM content to generate feedback. By default, it does not send data anywhere — everything stays local until you manually copy and paste.

    No external requests — all processing is client-side by default
    Local server only — when using the endpoint prop, data is sent to your local machine only (localhost)
    No data collection — nothing is tracked or stored remotely
    Dev-only — use the NODE_ENV check to exclude from production

Made by Benji Taylor, Dennis Jin, and Alex Vanderzon
Colophon


MCP Server

Connect AI agents to web page annotations via the Model Context Protocol
Overview

The agentation-mcp package provides an MCP server that allows AI coding agents (like Claude Code) to receive and respond to web page annotations created with the Agentation toolbar. This bypasses copy-paste entirely — just annotate and talk to your agent. It already has full context.

It runs both an HTTP server (for the browser toolbar) and an MCP server (for agents via stdio), sharing the same data store.

toolbar → server → agent
Browser
Toolbar
HTTP
Server
MCP
Server
AI Agent
Claude
POST /annotationsPOST /annotationsStore annotationget_pendingannotationsresolvestatus
resolved
request
response
Installation

npm install agentation-mcp
# or
pnpm add agentation-mcp

Quick Start
1. Add to your agent

The fastest way to configure Agentation across any supported agent:

npx add-mcp "npx -y agentation-mcp server"

Uses add-mcp to auto-detect installed agents (Claude Code, Cursor, Codex, Windsurf, and more) and write the correct config.

Or use the interactive wizard for Claude Code specifically:

npx agentation-mcp init

2. Verify your setup

npx agentation-mcp doctor

Checks Node.js version, agent config, and server connectivity.
CLI Commands

npx agentation-mcp init      # Setup wizard
npx agentation-mcp server    # Start server
npx agentation-mcp doctor    # Check setup
npx agentation-mcp help      # Show help

Server Options

--port <port>      # HTTP server port (default: 4747)
--mcp-only         # Skip HTTP server, only run MCP on stdio
--http-url <url>   # HTTP server URL for MCP to fetch from

Claude Code

To connect Claude Code to the Agentation MCP server:
1. Add the MCP server

npx add-mcp "npx -y agentation-mcp server"

Or use claude mcp add agentation -- npx agentation-mcp server or the interactive wizard: npx agentation-mcp init
2. Restart Claude Code

The MCP server starts automatically when Claude Code launches. Once connected, Claude can use all the Agentation tools to read and respond to your annotations.
3. Verify the connection

In Claude Code, you can verify the server is connected by asking Claude to list your annotation sessions. If the server is running, Claude will be able to use the agentation_list_sessions tool.
MCP Tools

Nine tools are exposed to AI agents via the Model Context Protocol:
Tool	Description
agentation_list_sessions	List all active annotation sessions
agentation_get_session	Get a session with all its annotations
agentation_get_pending	Get pending annotations for a session
agentation_get_all_pending	Get pending annotations across all sessions
agentation_acknowledge	Mark an annotation as acknowledged
agentation_resolve	Mark an annotation as resolved
agentation_dismiss	Dismiss an annotation with a reason
agentation_reply	Add a reply to an annotation thread
agentation_watch_annotations	Block until new annotations appear, then return batch
Tool Details
agentation_list_sessions

List all active annotation sessions. Use this to discover which pages have feedback.
agentation_get_session

Get a session with all its annotations. Input: sessionId
agentation_get_pending

Get all pending (unacknowledged) annotations for a session. Returns feedback, placement, and rearrange annotations. Use the kind field to distinguish between them. Input: sessionId

// Response — feedback annotation
{
  "count": 2,
  "annotations": [{
    "id": "ann_123",
    "comment": "Button is cut off on mobile",
    "element": "button",
    "elementPath": "body > main > .hero > button.cta",
    "kind": "feedback",
    "intent": "fix",
    "severity": "blocking"
  }, {
    "id": "ann_456",
    "comment": "Place a Hero component here",
    "kind": "placement",
    "placement": {
      "componentType": "Hero",
      "width": 800,
      "height": 400,
      "scrollY": 0
    }
  }]
}

agentation_get_all_pending

Get all pending annotations across ALL sessions. Returns all three annotation kinds: feedback, placement, and rearrange. Use this to see all unaddressed feedback and design requests from the human.
agentation_acknowledge

Mark an annotation as acknowledged. Use this to let the human know you've seen their feedback and will address it. Input: annotationId
agentation_resolve

Mark an annotation as resolved. Use this after you've addressed the feedback. Optionally include a summary of what you did. Input: annotationId, optional summary
agentation_dismiss

Dismiss an annotation. Use this when you've decided not to address the feedback, with a reason why. Input: annotationId, reason
agentation_reply

Add a reply to an annotation's thread. Use this to ask clarifying questions or provide updates to the human. Input: annotationId, message
agentation_watch_annotations

Block until new annotations appear, then collect a batch and return them. Picks up all annotation kinds: feedback, placement, and rearrange. Layout mode placements and rearrange changes trigger the watcher just like regular feedback annotations. After detecting the first new annotation, waits for a batch window to collect more before returning. Use in a loop for hands-free feedback processing. Input: optional sessionId, optional batchWindowSeconds (default: 10, max: 60), optional timeoutSeconds (default: 120, max: 300)
Hands-Free Mode

Use agentation_watch_annotations in a loop for automatic feedback processing — the agent automatically picks up new annotations as they're created:

    Agent calls agentation_watch_annotations (blocks until annotations appear)
    Annotations arrive — agent receives batch after collection window
    Agent processes each annotation:
        agentation_acknowledge — mark as seen
        Make code changes
        agentation_resolve — mark as done (annotation disappears from browser)
    Agent calls agentation_watch_annotations again (loop)

# Example CLAUDE.md instructions
When I say "watch mode", call agentation_watch_annotations in a loop.
For each annotation: acknowledge it, make the fix, then resolve it with a summary.
Continue watching until I say stop or timeout is reached.

Critique Mode

Hands-free mode waits for you to annotate. Critique mode flips that — the agent opens a headed browser, scrolls through your page top-to-bottom, and adds design annotations through the toolbar on your behalf. You watch the cursor move across the page in real time.

Critique the UI at http://localhost:3000

    Agent opens a headed browser to your page
    Scrolls top-to-bottom, picking elements to critique
    Moves cursor to each element, clicks to open the annotation dialog
    Types specific, actionable feedback and submits
    Repeats for 5–8 annotations across hierarchy, spacing, typography, navigation, and CTAs

You review them in the toolbar and decide what to fix.
Requires

npx skills add vercel-labs/agent-browser

Self-Driving Mode

Critique mode leaves annotations for you to review. Self-driving mode goes further — the same agent also fixes each issue after annotating it.

Self-driving mode on http://localhost:3000

    Agent opens a headed browser to your page
    Scrolls to an element, adds a critique annotation (visible in the toolbar)
    Reads the relevant source code and edits it to fix the issue
    Calls agentation_resolve — annotation disappears from the browser
    Verifies the fix in the browser (if a dev server is running)
    Moves to the next element, repeats

One Claude Code session handles everything — browser, code, and annotations.
Requires

Everything from critique mode, plus the self-driving skill:

ln -s "$(pwd)/skills/agentation-self-driving" ~/.claude/skills/agentation-self-driving

TypeScript Types

Key types for building your own integrations:

import type {
  Annotation,
  AnnotationIntent,    // "fix" | "change" | "question" | "approve"
  AnnotationSeverity,  // "blocking" | "important" | "suggestion"
  AnnotationStatus,    // "pending" | "acknowledged" | "resolved" | "dismissed"
  Session,
  SessionStatus,       // "active" | "approved" | "closed"
  SessionWithAnnotations,
  ThreadMessage,
  AFSEvent,
  AFSEventType,
  ActionRequest,
} from 'agentation-mcp';



