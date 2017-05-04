package de.sulzer.resources;


import de.sulzer.services.OperationService;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Stateless
@Path("operations")
public class OperationResource {
    @Inject
    OperationService operationService;

    @GET
    @Path("addition")
    public JsonObject addition() {

        int result = operationService.add(1, 2);
        JsonObject jsonResult = Json.createObjectBuilder().
                add("service", "service 1").
                add("result", result).
                build();
        return jsonResult;
    }

    @POST
    @Path("addition")
    public JsonObject addition(JsonObject input) {
        int a = input.getJsonNumber("a").intValue();
        int b = input.getJsonNumber("b").intValue();
        int result = operationService.add(a, b);
        JsonObject jsonResult = Json.createObjectBuilder().
                add("result", result).
                build();
        return jsonResult;
    }


}
