package controller;


import service.facade.ProblemBeanFacade;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("test")
public class HelloWorldResource {

    @EJB
    ProblemBeanFacade problemBean;

    @GET
    public String show() {
        String ret = problemBean.writeProblemTitle(1005L);
        return "Hello World 111! " + ret;
    }
}
