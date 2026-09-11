export type DiagramKind = "tenet" | "raft" | "cdc" | "claims" | "rag" | "cache" | "evaluation";

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
                    {stage.relationship === "peers" && nodeIndex < stage.nodes.length - 1 && <PeerConnector />}
                  </div>
                ))}
              </div>
            </div>
            {stageIndex < diagram.stages.length - 1 && (
              stage.connector === "fan-in" ? <FanInConnector /> : <DiagramConnector />
            )}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}

function DiagramConnector() {
  return (
    <div className="diagram-connector" aria-hidden="true">
      <svg className="connector-horizontal" viewBox="0 0 32 32">
        <path d="M0 16h32m-6-6 6 6-6 6" />
      </svg>
      <svg className="connector-vertical" viewBox="0 0 32 32">
        <path d="M16 0v32m-6-6 6 6 6-6" />
      </svg>
    </div>
  );
}

function PeerConnector() {
  return (
    <svg className="peer-connector" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M1 12h22M6 7l-5 5 5 5m12-10 5 5-5 5" />
    </svg>
  );
}

function FanInConnector() {
  return (
    <div className="diagram-connector fan-in-connector" aria-hidden="true">
      <svg className="connector-vertical" viewBox="0 0 100 36" preserveAspectRatio="none">
        <path d="M25 0c0 15 25 8 25 27M75 0c0 15-25 8-25 27M50 27v9m-2-4 2 4 2-4" />
      </svg>
    </div>
  );
}
import { Fragment } from "react";
