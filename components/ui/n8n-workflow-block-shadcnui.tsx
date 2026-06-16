"use client";
import { motion, type PanInfo } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import {
  ArrowRight,
  Plus,
  Award,
  CheckCircle2
} from "lucide-react";

interface WorkflowNode {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: { x: number; y: number };
  year: string;
  issuer: string;
}

interface WorkflowConnection {
  from: string;
  to: string;
}

const NODE_WIDTH = 280;
const NODE_HEIGHT = 160;

const initialNodes: WorkflowNode[] = [
  {
    id: "cert-1",
    type: "M&E",
    title: "M&E for Public Health",
    description: "Johns Hopkins University",
    icon: Award,
    color: "cyan",
    position: { x: 30, y: 50 },
    year: "2024",
    issuer: "JHSPH-ME-2024"
  },
  {
    id: "cert-2",
    type: "Systems",
    title: "Health Systems Strengthening",
    description: "World Health Organization",
    icon: CheckCircle2,
    color: "electric",
    position: { x: 350, y: 50 },
    year: "2023",
    issuer: "WHO-HSS-2023"
  },
  {
    id: "cert-3",
    type: "Ethics",
    title: "Research Ethics & Compliance",
    description: "CITI Program",
    icon: Award,
    color: "teal",
    position: { x: 670, y: 50 },
    year: "2023",
    issuer: "CITI-REC-2023"
  },
  {
    id: "cert-4",
    type: "PM",
    title: "Project Mgmt in Global Health",
    description: "PMI & Global Health Council",
    icon: CheckCircle2,
    color: "cyan",
    position: { x: 990, y: 50 },
    year: "2023",
    issuer: "PMGH-2023"
  },
  {
    id: "cert-5",
    type: "Epi",
    title: "Epidemiology & Biostatistics",
    description: "University of North Carolina",
    icon: Award,
    color: "electric",
    position: { x: 1310, y: 50 },
    year: "2022",
    issuer: "UNC-EB-2022"
  },
  {
    id: "cert-6",
    type: "GESI",
    title: "Gender Equality & Social Inclusion",
    description: "UN Women Training Centre",
    icon: CheckCircle2,
    color: "teal",
    position: { x: 1630, y: 50 },
    year: "2022",
    issuer: "UNW-GESI-2022"
  }
];

const initialConnections: WorkflowConnection[] = [
  { from: "cert-1", to: "cert-2" },
  { from: "cert-2", to: "cert-3" },
  { from: "cert-3", to: "cert-4" },
  { from: "cert-4", to: "cert-5" },
  { from: "cert-5", to: "cert-6" }
];

const colorClasses: Record<string, string> = {
  cyan: "border-cyan-400/40 bg-cyan-400/10 text-cyan-600",
  electric: "border-blue-400/40 bg-blue-400/10 text-blue-600",
  teal: "border-teal-400/40 bg-teal-400/10 text-teal-600"
};

function WorkflowConnectionLine({
  from,
  to,
  nodes
}: {
  from: string;
  to: string;
  nodes: WorkflowNode[];
}) {
  const fromNode = nodes.find((n) => n.id === from);
  const toNode = nodes.find((n) => n.id === to);
  if (!fromNode || !toNode) return null;

  const startX = fromNode.position.x + NODE_WIDTH;
  const startY = fromNode.position.y + NODE_HEIGHT / 2;
  const endX = toNode.position.x;
  const endY = toNode.position.y + NODE_HEIGHT / 2;

  const cp1X = startX + (endX - startX) * 0.5;
  const cp2X = endX - (endX - startX) * 0.5;

  const path = `M${startX},${startY} C${cp1X},${startY} ${cp2X},${endY} ${endX},${endY}`;

  return (
    <path
      d={path}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeDasharray="8,6"
      strokeLinecap="round"
      opacity={0.35}
      className="text-cyan"
    />
  );
}

export function N8nWorkflowBlock() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [connections] = useState<WorkflowConnection[]>(initialConnections);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [contentSize] = useState(() => {
    const maxX = Math.max(...initialNodes.map((n) => n.position.x + NODE_WIDTH));
    const maxY = Math.max(...initialNodes.map((n) => n.position.y + NODE_HEIGHT));
    return { width: maxX + 50, height: maxY + 50 };
  });

  const handleDragStart = (nodeId: string) => {
    setDraggingNodeId(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      dragStartPosition.current = { x: node.position.x, y: node.position.y };
    }
  };

  const handleDrag = (nodeId: string, { offset }: PanInfo) => {
    if (draggingNodeId !== nodeId || !dragStartPosition.current) return;

    const newX = dragStartPosition.current.x + offset.x;
    const newY = dragStartPosition.current.y + offset.y;

    const constrainedX = Math.max(0, newX);
    const constrainedY = Math.max(0, newY);

    flushSync(() => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId
            ? { ...node, position: { x: constrainedX, y: constrainedY } }
            : node
        )
      );
    });
  };

  const handleDragEnd = () => {
    setDraggingNodeId(null);
    dragStartPosition.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border-2 border-cyan/30 bg-gradient-to-br from-white/95 via-white/80 to-cyan/5 p-6 shadow-2xl shadow-cyan/10 backdrop-blur-sm sm:p-8">
      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute -left-2 -top-2 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-cyan/50" />
      <div className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-cyan/50" />
      <div className="pointer-events-none absolute -bottom-2 -left-2 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-cyan/50" />
      <div className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-cyan/50" />

      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-cyan-400/40 bg-gradient-to-r from-cyan/10 to-electric/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Verified
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700 sm:text-base">
            Certification Workflow
          </span>
        </div>
        <button
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas) {
              canvas.scrollTo({ left: 0, behavior: "smooth" });
            }
          }}
          className="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-cyan/30 bg-white px-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 shadow-sm transition hover:border-cyan/60 hover:bg-cyan/5"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Scroll to View</span>
        </button>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative h-[440px] w-full overflow-auto rounded-2xl border-2 border-cyan/20 bg-gradient-to-br from-cyan/[0.08] via-white/60 to-electric/[0.08] shadow-inner sm:h-[480px] md:h-[540px]"
        style={{ minHeight: "440px" }}
      >
        <div
          className="relative"
          style={{
            minWidth: contentSize.width,
            minHeight: contentSize.height
          }}
        >
          {/* SVG Connections */}
          <svg
            className="pointer-events-none absolute top-0 left-0"
            width={contentSize.width}
            height={contentSize.height}
            style={{ overflow: "visible" }}
          >
            {connections.map((c) => (
              <WorkflowConnectionLine
                key={`${c.from}-${c.to}`}
                from={c.from}
                to={c.to}
                nodes={nodes}
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isDragging = draggingNodeId === node.id;

            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                dragConstraints={{
                  left: 0,
                  top: 0,
                  right: 100000,
                  bottom: 100000
                }}
                onDragStart={() => handleDragStart(node.id)}
                onDrag={(_, info) => handleDrag(node.id, info)}
                onDragEnd={handleDragEnd}
                style={{
                  x: node.position.x,
                  y: node.position.y,
                  width: NODE_WIDTH,
                  transformOrigin: "0 0"
                }}
                className="absolute cursor-grab"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
              >
                <div
                  className={`group relative w-full overflow-hidden rounded-2xl border-2 ${colorClasses[node.color]} bg-white p-4 shadow-xl backdrop-blur transition-all hover:shadow-2xl ${
                    isDragging ? "shadow-2xl ring-4 ring-cyan/50" : ""
                  }`}
                >
                  {/* Top gradient accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan via-electric to-teal opacity-90" />

                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.06] via-transparent to-electric/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative space-y-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 ${colorClasses[node.color]} bg-white shadow-md`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 inline-block rounded-full border-2 border-cyan/30 bg-gradient-to-r from-cyan/10 to-electric/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                          {node.type}
                        </div>
                        <h3 className="line-clamp-2 text-sm font-bold leading-tight text-slate-900">
                          {node.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[11px] font-semibold leading-relaxed text-slate-600">
                      {node.description}
                    </p>
                    <div className="flex items-center justify-between border-t-2 border-cyan/15 pt-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-cyan-700">
                        <ArrowRight className="h-3 w-3" />
                        <span className="font-mono font-bold uppercase tracking-[0.05em]">
                          {node.issuer}
                        </span>
                      </div>
                      <span className="rounded-full border-2 border-cyan/40 bg-gradient-to-r from-cyan/15 to-electric/15 px-2.5 py-0.5 text-[10px] font-black text-cyan-700 shadow-sm">
                        {node.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Stats removed */}
    </div>
  );
}

export default N8nWorkflowBlock;
