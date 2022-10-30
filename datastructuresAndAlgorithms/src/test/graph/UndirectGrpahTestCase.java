package graph;

import cn.jiayeli.dataStructure.graph.undirectedGraph.UndirectedGraph;
import org.junit.Test;

import java.io.IOException;

/**
 * @author: jiayeli.cn
 * @description
 * @date: 2022/10/30 下午9:44
 */
public class UndirectGrpahTestCase {

    @Test
    public void initTest() {
        try {
            System.out.println(new UndirectedGraph("/home/kuro/workspace/bigdata/CHUILIAN-master/datastructuresAndAlgorithms/src/main/resources/graph/simpleGraph.data").toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
