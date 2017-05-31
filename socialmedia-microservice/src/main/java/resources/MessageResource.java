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
@Path("/messages")
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
public class MessageResource {

    @Inject
    MessageServiceMock messageService;

    @POST
    public Message create(Message message) {
        Message createdMessage = messageService.addMessage(message);
        return createdMessage;
    }

    @GET
    @Path("/{messageId}")
    public Message read(@PathParam("messageId") long id) { //automatically converted to from string parameter to long
        Message messageById = messageService.getMessageById(id);
        return messageById;
    }

    @PUT
    @Path("/{messageId}")
    public Message update(@PathParam("messageId") long id, Message message) {
        message.setId(id);
        Message updatedMessage = messageService.updateMessage(message);
        return updatedMessage;
    }

    @DELETE
    @Path("/{messageId}")
    public void delete(@PathParam("messageId") long id) {
        messageService.deleteMessage(id);
    }

    @GET
    public List<Message> list(  @QueryParam("year") int year,
                                @QueryParam("start") int start,
                                @QueryParam("size") int size) {
        if(year > 0) {
            return messageService.getAllMessagesByYear(year);
        }
        if(start >= 0 & size > 0) {
            return messageService.getAllMessagesPaginated(start, size);
        }
        return messageService.getAllMessages();
    }
}
