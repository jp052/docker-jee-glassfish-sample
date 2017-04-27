package de.sulzer;


import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("test")
public class HelloWorldResource {
    @GET
    @Path("{testget}")
    public String show() {
        return "Hello World 2!";
    }

    //    @GET
//    @Path("/{testid}")
//    public Response getPetById(
//            @PathParam("testid") Long petId) throws NotFoundException {
//
//        if (null != petId) {
//            return Response.ok("Pet found juhuu").build();
//        } else {
//            throw new NotFoundException("Pet not found");
//        }
//    }
}
