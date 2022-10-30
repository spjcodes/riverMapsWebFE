package cn.jiayeli.dataStructure.graph;

/**
 * @author: jiayeli.cn
 * @description undirected graph
 * @date: 2022/10/30 下午7:37
 */
public interface Graph {

    //vertex number
    int V();

    //edge number
    int E();

    //add edge v-w
    void addEdge(int v, int w);

    //vertex v all adjacent vertex
    Iterable<Integer>adj(int v);

    //计算顶点的度数
    public  int degree(Graph G, int v);

    //计算所有顶点的最大度数
    public int maxDegree(Graph G);

    //计算所有顶点的平均度数
    public double avgDegree(Graph G);

    //计算自环的个数
    public int numberOfSelfLoops(Graph G);

    //图的邻接表的字符串表示（Graph 的实例方法）
    String toString();

}
