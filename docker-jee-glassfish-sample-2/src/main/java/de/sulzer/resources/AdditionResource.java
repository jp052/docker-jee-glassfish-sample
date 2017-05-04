package de.sulzer.resources;

import de.sulzer.services.AdditionService;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Stateless
@Path("addition")
public class AdditionResource {
    @Inject
    AdditionService additionService;

    @GET
    public JsonObject addition() {

        int result = additionService.add(2, 3);
        JsonObject jsonResult = Json.createObjectBuilder().
                add("service", "service 2").
                add("result", result).
                build();
        return jsonResult;
    }

    @POST
    public JsonObject addition(JsonObject input) {
        int a = input.getJsonNumber("a").intValue();
        int b = input.getJsonNumber("b").intValue();
        int result = additionService.add(a, b);
        JsonObject jsonResult = Json.createObjectBuilder().
                add("result", result).
                build();
        return jsonResult;
    }
}
