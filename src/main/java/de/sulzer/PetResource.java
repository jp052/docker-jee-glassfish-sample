package de.sulzer;

import io.swagger.annotations.*;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("pet")
@Api(tags = {"pet"})
@Produces({"application/json", "application/xml"})
public class PetResource {

    @GET
    @Path("{testget}")
//    @ApiOperation(value = "Find pet by ID",
//            notes = "Returns a pet when 0 < ID <= 10.  ID > 10 or nonintegers will simulate API error conditions",
//            response = String.class)
//    @ApiResponses(value = {@ApiResponse(code = 400, message = "Invalid ID supplied"),
//            @ApiResponse(code = 404, message = "Pet not found")})
    public String getPet() {
        return "Pet String";
    }

/*    @GET
    @Path("/{petId}")
    @ApiOperation(value = "Find pet by ID",
            notes = "Returns a pet when 0 < ID <= 10.  ID > 10 or nonintegers will simulate API error conditions",
            response = String.class)
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Invalid ID supplied"),
            @ApiResponse(code = 404, message = "Pet not found")})
    public Response getPetById(
            @ApiParam(value = "ID of pet that needs to be fetched", allowableValues = "range[1,10]", required = true)
            @PathParam("petId") Long petId) throws NotFoundException {

        if (null != petId) {
            return Response.ok("Pet found juhuu").build();
        } else {
            throw new NotFoundException("Pet not found");
        }
    }*/

}