package cn.jiayeli.dataStructure.graph;

public interface Search {

    //v 和 s 是连通的吗
    boolean marked(int s, int v);

    //v 和 s 是连通的吗
    boolean marked(int v);

    //与 s 连通的顶点总数
    int count();

    //s 与 v 连通的顶点总数
    int count(int s, int v);

}
