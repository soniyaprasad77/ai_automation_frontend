from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Allow CORS for your frontend's origin
origins = [
    "http://localhost:3000",  # Frontend address
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    # Number of nodes and edges
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Create adjacency list for the graph
    graph = {node.id: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)

    # Check if the graph is a Directed Acyclic Graph (DAG)
    is_dag = check_if_dag(graph)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}

def check_if_dag(graph):
    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return False
        if node in visited:
            return True
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
        rec_stack.remove(node)
        return True

    for node in graph:
        if not dfs(node):
            return False
    return True
