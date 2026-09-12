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
    stages: [],
  },
  cdc: {
    title: "CinemaPulse data flow",
    stages: [],
  },
  claims: {
    title: "Deterministic-first claim verification",
    stages: [],
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
    title: "Machine-local cache request path",
    stages: [
      { nodes: [{ title: "Client" }] },
      { nodes: [{ title: "Unix domain socket", detail: "versioned binary protocol" }] },
      { nodes: [{ title: "epoll · connection state", detail: "fragmentation · partial writes" }] },
      { nodes: [{ title: "Bounded work queue", detail: "backpressure" }] },
      { nodes: [{ title: "Worker pool" }] },
      { nodes: [{ title: "Exact global LRU", detail: "map · list · cache mutex" }] },
      { nodes: [{ title: "eventfd completion", detail: "serialize · return response" }] },
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
  if (kind === "cdc") return <CinemaPulseDiagram title={diagram.title} />;
  if (kind === "claims") return <ClaimVerificationDiagram title={diagram.title} />;
  if (kind === "raft") return <RivetDBDiagram title={diagram.title} />;
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

function RivetDBDiagram({ title }: { title: string }) {
  return (
    <figure className="architecture architecture--raft" aria-label={title}>
      <figcaption><span className="status-dot" /> System architecture<span>{title}</span></figcaption>
      <div className="cinema-flow">
        <span className="cinema-stage-label">Replicated data path</span>
        <PipelineNode title="Caller" detail="in-process key-value + transaction APIs" />
        <FlowArrow />
        <PipelineNode title="Range router" detail="key → range → leader · stale-route refresh" />
        <FlowArrow />
        <PipelineNode title="Replicated MetaRange" detail="range metadata · placement authority" />
        <FlowArrow />
        <PipelineNode title="Multi-Raft range" detail="per-range replication · election · ordered apply" accent />
        <FlowArrow />
        <PipelineNode title="Replicated MVCC state machine" detail="history · intents · Snapshot Isolation · 2PC" />
        <FlowArrow />
        <PipelineNode title="Custom LSM storage engine" detail="WAL · MemTables · SSTables · Bloom filters · Manifest · compaction" accent />
      </div>
      <div className="cinema-support" aria-label="Validator-gated range management">
        <span className="cinema-stage-label">Validator-gated control plane</span>
        <div className="cinema-flow">
          <PipelineNode title="Telemetry · range state" />
          <FlowArrow />
          <PipelineNode title="Deterministic rebalancer" detail="placement · health · capacity · cooldown" />
          <FlowArrow />
          <PipelineNode title="Safety validator" detail="mandatory before admission" accent />
          <FlowArrow />
          <PipelineNode title="Split · migration · replica movement" detail="restartable certified protocols" />
        </div>
      </div>
    </figure>
  );
}

function ClaimVerificationDiagram({ title }: { title: string }) {
  return (
    <figure className="architecture architecture--claims" aria-label={title}>
      <figcaption><span className="status-dot" /> System architecture<span>{title}</span></figcaption>
      <div className="cinema-flow">
        <PipelineNode title="Claim" />
        <FlowArrow />
        <PipelineNode title="Normalize" />
        <FlowArrow />
        <PipelineNode title="Authoritative evidence" detail="claim-scoped fields only" />
        <FlowArrow />
        <PipelineNode title="Deterministic rules" detail="exact facts resolved first" accent />
        <BranchConnector markerId="claim-routing-branch" />
        <div className="cinema-branch">
          <PipelineNode title="Terminal verdict" detail="when rules settle the claim" />
          <div className="cinema-ingress-path">
            <PipelineNode title="LLM fallback" detail="semantic ambiguity only" />
            <FlowArrow />
            <PipelineNode title="Schema validation" detail="JSON Schema · Pydantic" />
          </div>
        </div>
        <MergeConnector markerId="claim-verdict-merge" />
        <PipelineNode title="Auditable verdict" detail="versioned structured response" accent />
      </div>
    </figure>
  );
}

function CinemaPulseDiagram({ title }: { title: string }) {
  return (
    <figure className="architecture architecture--cdc" aria-label={title}>
      <figcaption><span className="status-dot" /> System architecture<span>{title}</span></figcaption>
      <div className="cinema-flow">
        <div className="cinema-ingress">
          <div className="cinema-ingress-path">
            <span className="cinema-stage-label">Transactional sources</span>
            <div className="cinema-source-pair"><PipelineNode title="PostgreSQL" /><PipelineNode title="MongoDB" /></div>
            <FlowArrow />
            <PipelineNode title="Debezium · Kafka Connect" detail="WAL + change streams" accent />
          </div>
          <div className="cinema-ingress-path">
            <span className="cinema-stage-label">Playback telemetry</span>
            <PipelineNode title="Playback simulator" detail="deterministic fixtures" />
            <FlowArrow />
            <PipelineNode title="Avro" detail="typed playback events" accent />
          </div>
        </div>
        <MergeConnector markerId="cinema-ingress-merge" />
        <PipelineNode title="Kafka" detail="durable keyed transport" accent />
        <FlowArrow />
        <PipelineNode title="Spark Structured Streaming" detail="bounded ingestion · event-time state" />
        <FlowArrow />
        <PipelineNode title="Iceberg Bronze" detail="append-only physical delivery evidence" />
        <FlowArrow />
        <PipelineNode title="Validation · durable dedup · quarantine" detail="logical identity · payload hashes · lineage" />
        <FlowArrow />
        <PipelineNode title="Trusted Silver" detail="validated logical records" accent />
        <BranchConnector markerId="cinema-silver-branch" />
        <div className="cinema-branch">
          <PipelineNode title="Stateful sessions" detail="event time · checkpoints" />
          <PipelineNode title="CDC current state" detail="replay-aware convergence" />
        </div>
        <MergeConnector markerId="cinema-gold-merge" />
        <PipelineNode title="SCD2 dimensions · Gold facts" detail="historically correct joins" />
        <FlowArrow />
        <PipelineNode title="QoE · engagement · payment marts" />
        <FlowArrow />
        <PipelineNode title="DuckDB" detail="independent analytical validation" accent />
      </div>
      <div className="cinema-support" aria-label="Supporting services">
        <span className="cinema-stage-label">Supporting services</span>
        <div className="cinema-support-grid">
          <PipelineNode title="Schema Registry" detail="Kafka · Avro schemas" />
          <PipelineNode title="Polaris" detail="Iceberg catalog" />
          <PipelineNode title="MinIO" detail="object storage" />
          <PipelineNode title="Airflow" detail="bounded orchestration" />
          <PipelineNode title="Prometheus · Grafana" detail="observability" />
        </div>
      </div>
      <p className="cinema-semantics">At-least-once CDC with replay detection, checkpoint recovery, and deterministic downstream convergence.</p>
    </figure>
  );
}

function PipelineNode({ title, detail, accent = false }: Node & { accent?: boolean }) {
  return <div className={`architecture-node cinema-node${accent ? " cinema-node--accent" : ""}`}><strong>{title}</strong>{detail && <small>{detail}</small>}</div>;
}

function FlowArrow() {
  return <div className="cinema-arrow" aria-hidden="true"><span /></div>;
}

function MergeConnector({ markerId }: { markerId: string }) {
  return <svg className="cinema-connector cinema-connector--merge" aria-hidden="true" viewBox="0 0 100 28" preserveAspectRatio="none"><defs><ArrowMarker id={markerId} /></defs><path d="M25 0v7c0 5 25 3 25 14M75 0v7c0 5-25 3-25 14M50 21v4" markerEnd={`url(#${markerId})`} /></svg>;
}

function BranchConnector({ markerId }: { markerId: string }) {
  return <svg className="cinema-connector cinema-connector--branch" aria-hidden="true" viewBox="0 0 100 28" preserveAspectRatio="none"><defs><ArrowMarker id={`${markerId}-left`} /><ArrowMarker id={`${markerId}-right`} /></defs><path d="M50 0v7M50 7c0 5-25 3-25 14v4" markerEnd={`url(#${markerId}-left)`} /><path d="M50 7c0 5 25 3 25 14v4" markerEnd={`url(#${markerId}-right)`} /></svg>;
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
