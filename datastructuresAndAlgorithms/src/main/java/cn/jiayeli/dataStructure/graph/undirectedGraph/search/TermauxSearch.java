package cn.jiayeli.dataStructure.graph.undirectedGraph.search;

import cn.jiayeli.dataStructure.graph.Graph;
import cn.jiayeli.dataStructure.graph.Search;
import cn.jiayeli.dataStructure.graph.undirectedGraph.UndirectedGraph;

import java.util.ArrayList;

/**
 * @author: jiayeli.cn
 * @description termaux search
 * @date: 2022/10/30 下午11:03
 */
public class TermauxSearch implements Search {

    private Graph graph;

    private boolean[] marked;

    private int s;

    private int v;

    public TermauxSearch(Graph graph, int s){
        this.graph = graph;
        this.s = s;
        this.v = graph.V();
        this.marked = new boolean[graph.V()];
    }

    @Override
    public boolean marked(int s, int v) {
        for (Integer sVertex : this.graph.adj(s)) {
            for (Integer subVertex : this.graph.adj(sVertex)) {
                if (subVertex.equals(v)) {
                    return true;
                }
            }

        }
        return false;
    }

    @Override
    public boolean marked(int v) {
        UndirectedGraph graph = (UndirectedGraph) this.graph;
        for (ArrayList<Integer> curAdj : graph.getAdj()) {
            if (curAdj.contains(v)) {
                return true;
            } else {
                for (Integer vertex : curAdj) {
                    if (vertex.equals(v)) {
                        return true;
                    }

                }
            }
        }
        return false;
    }

    @Override
    public int count() {
        return 0;
    }

    @Override
    public int count(int s, int v) {
        return 0;
    }
}
