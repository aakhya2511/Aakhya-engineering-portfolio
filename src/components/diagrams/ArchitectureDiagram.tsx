import { Fragment } from "react";

export type DiagramKind = "tenet" | "raft" | "cdc" | "claims" | "rag" | "cache" | "evaluation" | "commerce" | "serverless" | "analytics";

type Node = { title: string; detail?: string };
type Stage = { label?: string; nodes: Node[]; relationship?: "peers"; connector?: "fan-in" };

const diagrams: Record<DiagramKind, { title: string; stages: Stage[] }> = {
  tenet: {
    title: "Enterprise data modernization flow",
    stages: [
      { label: "Legacy systems", nodes: [{ title: "DB2 · SQL Server · Files" }] },
      { label: "Processing", nodes: [{ title: "SQL · Python", detail: "Airflow orchestration" }] },
      { label: "Cloud platform", nodes: [{ title: "GCS · Dataflow · BigQuery" }] },
      { nodes: [{ title: "Validation & reconciliation", detail: "correctness · freshness · business logic" }] },
      { nodes: [{ title: "Reporting & analytics" }] },
    ],
  },
  raft: {
    title: "RivetDB system architecture",
    stages: [
      { nodes: [{ title: "Client" }] },
      { label: "Raft cluster", nodes: [{ title: "Node A" }, { title: "Node B" }, { title: "Node C" }], relationship: "peers" },
      { nodes: [{ title: "Replicated log" }] },
      { nodes: [{ title: "State machine" }] },
      { nodes: [{ title: "Storage", detail: "in-memory · durable" }] },
    ],
  },
  cdc: {
    title: "CinemaPulse data flow",
    stages: [
      { label: "Operational sources", nodes: [{ title: "PostgreSQL" }, { title: "MongoDB" }], connector: "fan-in" },
      { nodes: [{ title: "CDC", detail: "ordered source changes" }] },
      { nodes: [{ title: "Trusted events", detail: "auditable · replayable" }] },
      { nodes: [{ title: "Materialization" }] },
      { nodes: [{ title: "Apache Iceberg" }] },
      { nodes: [{ title: "Polaris" }] },
      { nodes: [{ title: "DuckDB" }] },
    ],
  },
  claims: {
    title: "Claim verification flow",
    stages: [
      { nodes: [{ title: "Claim" }] },
      { nodes: [{ title: "Evidence / context" }] },
      { nodes: [{ title: "Verification pipeline" }] },
      { nodes: [{ title: "LLM", detail: "configurable provider + model" }] },
      { nodes: [{ title: "Structured decision" }] },
      { nodes: [{ title: "Evaluation" }] },
    ],
  },
  rag: {
    title: "Retrieval-augmented generation flow",
    stages: [
      { nodes: [{ title: "Documents" }] },
      { nodes: [{ title: "Chunking / embeddings" }] },
      { nodes: [{ title: "FAISS retrieval" }] },
      { nodes: [{ title: "Relevant context" }] },
      { nodes: [{ title: "LLM" }] },
      { nodes: [{ title: "Grounded response" }] },
    ],
  },
  cache: {
    title: "Cache service flow",
    stages: [
      { nodes: [{ title: "Client request" }] },
      { nodes: [{ title: "Protocol layer" }] },
      { nodes: [{ title: "Cache core", detail: "invariants · policy" }] },
      { nodes: [{ title: "Response" }] },
    ],
  },
  evaluation: {
    title: "LLM evaluation flow",
    stages: [
      { nodes: [{ title: "Run config" }] },
      { nodes: [{ title: "Model inference" }] },
      { nodes: [{ title: "Result capture" }] },
      { nodes: [{ title: "Evaluation" }] },
      { nodes: [{ title: "Comparison" }] },
    ],
  },
  commerce: {
    title: "Server-mediated product search flow",
    stages: [
      { nodes: [{ title: "Search UI", detail: "debounced input · filters" }] },
      { nodes: [{ title: "Server API", detail: "token management · normalization" }] },
      { nodes: [{ title: "eBay Browse API" }] },
      { nodes: [{ title: "Product results", detail: "pagination · resilient states" }] },
    ],
  },
  serverless: {
    title: "Event-driven text-to-speech flow",
    stages: [
      { nodes: [{ title: "S3 text upload" }] },
      { nodes: [{ title: "Lambda", detail: "event processing" }] },
      { nodes: [{ title: "Amazon Polly" }] },
      { nodes: [{ title: "S3 audio output" }] },
    ],
  },
  analytics: {
    title: "Job-market analysis flow",
    stages: [
      { nodes: [{ title: "Job postings" }] },
      { nodes: [{ title: "Collect & parse", detail: "Selenium · BeautifulSoup" }] },
      { nodes: [{ title: "Structured records" }] },
      { nodes: [{ title: "Skill extraction", detail: "KeyBERT" }] },
      { nodes: [{ title: "Trend analysis", detail: "pandas" }] },
    ],
  },
};

export function ArchitectureDiagram({ kind, compact = false }: { kind: DiagramKind; compact?: boolean }) {
  const diagram = diagrams[kind];
  return (
    <figure className={`architecture architecture--${kind} ${compact ? "architecture--compact" : ""}`} aria-label={diagram.title}>
      <figcaption>
        <span className="status-dot" /> System architecture
        <span>{diagram.title}</span>
      </figcaption>
      <div className="architecture-flow">
        {diagram.stages.map((stage, stageIndex) => (
          <Fragment key={`${kind}-${stageIndex}`}>
            <div className={`architecture-step architecture-step--${stageIndex + 1}`}>
              <span className={`architecture-label ${stage.label ? "" : "architecture-label--empty"}`} aria-hidden={!stage.label}>{stage.label ?? "stage"}</span>
              <div className="architecture-nodes">
                {stage.nodes.map((node, nodeIndex) => (
                  <div className="architecture-node-item" key={node.title}>
                    <div className="architecture-node">
                      <strong>{node.title}</strong>
                      {node.detail && <small>{node.detail}</small>}
                    </div>
                    {stage.relationship === "peers" && nodeIndex < stage.nodes.length - 1 && <PeerConnector markerId={`${kind}-peer-${nodeIndex}`} />}
                  </div>
                ))}
              </div>
            </div>
            {stageIndex < diagram.stages.length - 1 && (
              stage.connector === "fan-in" ? <FanInConnector markerId={`${kind}-fan-${stageIndex}`} /> : <DiagramConnector markerId={`${kind}-flow-${stageIndex}`} />
            )}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}

function ArrowMarker({ id }: { id: string }) {
  return (
    <marker id={id} viewBox="0 0 5 5" refX="4.5" refY="2.5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path className="diagram-arrowhead" d="M0 0 5 2.5 0 5Z" />
    </marker>
  );
}

function DiagramConnector({ markerId }: { markerId: string }) {
  return (
    <div className="diagram-connector" aria-hidden="true">
      <svg className="connector-horizontal" viewBox="0 0 32 32">
        <defs><ArrowMarker id={`${markerId}-h`} /></defs>
        <path d="M0 16h29" markerEnd={`url(#${markerId}-h)`} />
      </svg>
      <svg className="connector-vertical" viewBox="0 0 32 32">
        <defs><ArrowMarker id={`${markerId}-v`} /></defs>
        <path d="M16 0v29" markerEnd={`url(#${markerId}-v)`} />
      </svg>
    </div>
  );
}

function PeerConnector({ markerId }: { markerId: string }) {
  return (
    <svg className="peer-connector" aria-hidden="true" viewBox="0 0 24 24">
      <defs><ArrowMarker id={markerId} /></defs>
      <path d="M3 12h18" markerStart={`url(#${markerId})`} markerEnd={`url(#${markerId})`} />
    </svg>
  );
}

function FanInConnector({ markerId }: { markerId: string }) {
  return (
    <div className="diagram-connector fan-in-connector" aria-hidden="true">
      <svg className="connector-vertical" viewBox="0 0 100 36" preserveAspectRatio="none">
        <defs><ArrowMarker id={markerId} /></defs>
        <path d="M25 0c0 15 25 8 25 27M75 0c0 15-25 8-25 27" />
        <path d="M50 27v6" markerEnd={`url(#${markerId})`} />
      </svg>
    </div>
  );
}
