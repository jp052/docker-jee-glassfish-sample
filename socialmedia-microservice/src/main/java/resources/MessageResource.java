package resources;

import persistence.model.Message;
import service.MessageServiceMock;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Stateless
@Path("messages")
public class MessageResource {

    @Inject
    MessageServiceMock messageService;

    @POST
    public JsonObject create() {
        //TODO
        return null;
    }

    @GET
    @Path("{messageId}")
    public JsonObject read(@QueryParam("messageId") Long messageId) {
        //TODO
        return null;
    }

    @PUT
    @Path("{messageId}")
    public JsonObject update() {
        //TODO
        return null;
    }

    @DELETE
    @Path("{messageId}")
    public JsonObject delete() {
        //TODO
        return null;
    }

    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<Message> list() {
        //TODO
        return messageService.getAllMessages();
    }
}
