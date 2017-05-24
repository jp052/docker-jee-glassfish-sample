///*
//package controller;
//
//
//import persistence.model.Problem;
//import service.facade.ProblemBeanFacade;
//
//import javax.ejb.EJB;
//import javax.json.*;
//import javax.ws.rs.*;
//import javax.ws.rs.core.Response;
//import java.util.ArrayList;
//import java.util.List;
//
//@Path("problem")
//public class HelloWorldResource {
//
//    @EJB
//    ProblemBeanFacade problemBean;
//
//    @GET
//    @Path("list")
//     public JsonArray list(
//            @DefaultValue("") @QueryParam("title") String filterTitle,
//            @DefaultValue("") @QueryParam("modul") String filterModul
//    ) {
//        List<Problem> returnList = problemBean.readAllProblems();
//        JsonBuilderFactory factory = Json.createBuilderFactory(null);
//        JsonArrayBuilder list = factory.createArrayBuilder();
//        returnList.forEach(c -> {
//            if (
//                    (filterTitle == null || filterTitle.isEmpty() || c.getTitle().contains(filterTitle)) &&
//                    (filterModul == null || filterModul.isEmpty() || c.getModule().contains(filterModul))) {
//                list.add(factory.createObjectBuilder()
//                        .add("id", c.getId())
//                        .add("title", c.getTitle())
//                        .add("modul", c.getModule())
//                        .add("termin", c.getTermin().toString())
//                        .add("status", c.getStatus())
//                        .add("kpi", c.getKpi() == null ? factory.createObjectBuilder() : factory.createObjectBuilder().add("id", c.getKpi().getId()).add("text", c.getKpi().getText()))
//                );
//            }
//        });
//
//        return list.build();
//    }
//
//    @GET
//    @Path("show")
//    public JsonObject show(@QueryParam("id") Long problemId) {
//        Problem problem = problemBean.readProblem(problemId);
//        JsonBuilderFactory factory = Json.createBuilderFactory(null);
//        JsonObjectBuilder returnValue = factory.createObjectBuilder();
//            returnValue
//                    .add("id", problem.getId())
//                    .add("title", problem.getTitle())
//                    .add("modul", problem.getModule())
//                    .add("termin", problem.getTermin().toString())
//                    .add("status", problem.getStatus())
//                    .add("kpi", problem.getKpi() == null ? factory.createObjectBuilder() : factory.createObjectBuilder().add("id", problem.getKpi().getId()).add("text", problem.getKpi().getText()));
//
//        return returnValue.build();
//    }
//
//    @PUT
//    @Path("update/{xid}")
//    public JsonObject update(@PathParam("xid") Long problemId, JsonObject input) {
//        Problem problem = problemBean.updateProblem(problemId, input);
//        return convertProblem(problem).build();
//    }
//
//    @POST
//    @Path("insert")
//    public JsonObject insert(JsonObject input) {
//        Problem problem = problemBean.insertProblem(input);
//        return convertProblem(problem).build();
//    }
//
//    @DELETE
//    @Path("remove/{xid}")
//    public Response remove(@PathParam("xid") Long problemId) {
//        Problem problem = problemBean.deleteProblem(problemId);
//        return (problem != null ? Response.ok().build() : Response.noContent().build());
//    }
//
//
//    private JsonObjectBuilder convertProblem(Problem problem) {
//        JsonBuilderFactory factory = Json.createBuilderFactory(null);
//        JsonObjectBuilder returnValue = factory.createObjectBuilder();
//        if (problem != null) {
//            returnValue
//                    .add("id", problem.getId())
//                    .add("title", problem.getTitle())
//                    .add("modul", problem.getModule())
//                    .add("termin", problem.getTermin().toString())
//                    .add("status", problem.getStatus())
//                    .add("kpi", problem.getKpi() == null ? factory.createObjectBuilder() : factory.createObjectBuilder().add("id", problem.getKpi().getId()).add("text", problem.getKpi().getText()));
//
//        }
//
//        return returnValue;
//    }
//
//    */
///*
//    @POST
//    @Path("insert")
//    public String insert(JsonObject input) {
//        String ret = problemBean.writeProblemTitle(1005L);
//        return "Hello World 111! " + ret;
//    }
//
//*//*
//
//}
//*/
