package graph;

import cn.jiayeli.dataStructure.graph.undirectedGraph.UndirectedGraph;
import cn.jiayeli.dataStructure.graph.undirectedGraph.search.TermauxSearch;
import org.junit.Test;

import java.io.IOException;

/**
 * @author: jiayeli.cn
 * @description
 * @date: 2022/10/30 下午9:44
 */
public class UndirectGrpahTestCase {

    /**
     * 7 vertices, 23edges
     * 0: 1 2 5 6
     * 1: 0
     * 2: 0
     * 3: 4 5
     * 4: 5 6
     * 5: 0 3 4
     * 6: 0 4
     * * *
     */
    @Test
    public void initTest() {
        try {
            UndirectedGraph undirectedGraph = new UndirectedGraph("/home/kuro/workspace/bigdata/CHUILIAN-master/datastructuresAndAlgorithms/src/main/resources/graph/simpleGraph.data");
            System.out.println(undirectedGraph.toString());
//            System.out.println(new TermauxSearch(undirectedGraph, 10).marked(5));
            System.out.println(new TermauxSearch(undirectedGraph, 0).marked(3,5));
            System.out.println(new TermauxSearch(undirectedGraph, 0).marked(3,6));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
