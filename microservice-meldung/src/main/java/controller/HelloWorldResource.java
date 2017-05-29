package controller;


import persistence.model.Meldung;
import service.facade.MeldungBeanFacade;

import javax.ejb.EJB;
import javax.json.*;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("meldung")
public class HelloWorldResource {

    @EJB
    MeldungBeanFacade meldungBean;

    //TODO

    @GET
    @Path("list")
     public JsonArray list(
            @DefaultValue("") @QueryParam("title") String filterTitle,
            @DefaultValue("") @QueryParam("module") String filterModul
    ) {
        List<Meldung> returnList = meldungBean.readAllReports();
        JsonBuilderFactory factory = Json.createBuilderFactory(null);
        JsonArrayBuilder list = factory.createArrayBuilder();
        returnList.forEach(c -> {
            if (
                    (filterTitle == null || filterTitle.isEmpty() || c.getTitle().contains(filterTitle)) &&
                    (filterModul == null || filterModul.isEmpty() || c.getModule().contains(filterModul))) {
                list.add(factory.createObjectBuilder()
                        .add("id", c.getId())
                        .add("nummer", c.getNummer())
                        .add("qbr", c.getQbr())
                        .add("module", c.getModule())
                        .add("title", c.getTitle())
                        .add("status", c.getStatus())
                        .add("termin", c.getTermin().toString())
                );
            }
        });

        return list.build();
    }

    @GET
    @Path("show")
    public JsonObject show(@QueryParam("id") Long meldungId) {
        Meldung meldung = meldungBean.readMeldung(meldungId);
        JsonBuilderFactory factory = Json.createBuilderFactory(null);
        JsonObjectBuilder returnValue = factory.createObjectBuilder();
            returnValue
                    .add("id", meldung.getId())
                    .add("nummer", meldung.getNummer())
                    .add("qbr", meldung.getQbr())
                    .add("module", meldung.getModule())
                    .add("title", meldung.getTitle())
                    .add("status", meldung.getStatus())
                    .add("termin", meldung.getTermin().toString());

        return returnValue.build();
    }

    @PUT
    @Path("update/{xid}")
    public JsonObject update(@PathParam("xid") Long meldungId, JsonObject input) {
        Meldung meldung = meldungBean.updateMeldung(meldungId, input);
        return convertProblem(meldung).build();
    }

    @POST
    @Path("insert")
    public JsonObject insert(JsonObject input) {
        Meldung meldung = meldungBean.insertMeldung(input);
        return convertProblem(meldung).build();
    }

    @DELETE
    @Path("remove/{xid}")
    public Response remove(@PathParam("xid") Long meldungId) {
        Meldung meldung = meldungBean.deleteMeldung(meldungId);
        return (meldung != null ? Response.ok().build() : Response.noContent().build());
    }


    private JsonObjectBuilder convertProblem(Meldung meldung) {
        JsonBuilderFactory factory = Json.createBuilderFactory(null);
        JsonObjectBuilder returnValue = factory.createObjectBuilder();
        if (meldung != null) {
            returnValue
                    .add("id", meldung.getId())
                    .add("nummer", meldung.getNummer())
                    .add("qbr", meldung.getQbr())
                    .add("module", meldung.getModule())
                    .add("title", meldung.getTitle())
                    .add("status", meldung.getStatus())
                    .add("termin", meldung.getTermin().toString());

        }

        return returnValue;
    }

    /*
    @POST
    @Path("insert")
    public String insert(JsonObject input) {
        String ret = problemBean.writeProblemTitle(1005L);
        return "Hello World 111! " + ret;
    }

*/
}
