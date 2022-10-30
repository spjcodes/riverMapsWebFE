package cn.jiayeli.dataStructure.graph.undirectedGraph;

import cn.jiayeli.dataStructure.graph.Graph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author: jiayeli.cn
 * @description undirected graph
 * @date: 2022/10/30 下午8:47
 */
public class UndirectedGraph implements Graph {

    private static final Logger logger = LoggerFactory.getLogger(UndirectedGraph.class);

    public int v;

    public int e;

    List<ArrayList<Integer>> adj;

    UndirectedGraph(int v) {
        this.v = v;
        this.e = 0;
        this.adj  = new ArrayList();
    };

    public UndirectedGraph(String graphDescribeFilePath) throws IOException {

        List<String> strings = Files.readAllLines(Paths.get(graphDescribeFilePath));
        strings
                .forEach(e -> {
                    if (e.contains(":")) {
                        if (e.contains("vertexNumber")) {
                            this.v = Integer.parseInt(e.split("\\s+")[1]);
                            this.adj  = new ArrayList();
                            for (int i = 0; i < v; i++) {
                                this.adj.add(i, new ArrayList<>());
                            }
                        } else {
                            this.e = Integer.parseInt(e.split("\\s+")[1]);
                        }
                    } else {
                        addEdge(parseString2Tuple2(e).get(0), parseString2Tuple2(e).get(1));
                    }

                });
    }

    public List<Integer> parseString2Tuple2(String str) {
        return Arrays.asList(Integer.parseInt(str.split("\\s+")[0]), Integer.parseInt(str.split("\\s+")[1]));
    }

    @Override
    public int V() {
        return this.v;
    }

    @Override
    public int E() {
        return this.e;
    }

    @Override
    public void addEdge(int v, int w) {
        this.adj.get(v).add(w);
        this.e+=1;
    }

    @Override
    public Iterable<Integer> adj(int v) {
        if (this.adj.contains(v)) {
            return this.adj.get(v);
        } else {
            logger.error("{} is a Illegal parameter", v);
        }
        return this.adj.get(v);
    }

    @Override
    public int degree(Graph G, int v) {
        if (G.adj(v) != null) {
            return adj.get(v).size();
        }
        return 0;
    }

    @Override
    public int maxDegree(Graph G) {
        return 0;
    }

    @Override
    public double avgDegree(Graph G) {
        return 0;
    }

    @Override
    public int numberOfSelfLoops(Graph G) {
        return 0;
    }

    @Override
    public String toString() {
        String s = v + " vertices, " + e + "edges\n";
        for (int cv = 0; cv < V(); cv++)
        {
            s += cv + ": ";
            for (int w : this.adj(cv))
                s += w + " ";
            s += "\n";
        }
        return s;
    }
}
