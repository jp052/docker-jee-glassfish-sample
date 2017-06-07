package resources;

import persistence.model.Comment;
import persistence.model.Message;
import resources.filter.MessageFilterBean;
import service.CommentServiceMock;
import service.MessageServiceMock;

import javax.ejb.Stateless;
import javax.inject.Inject;
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

    @Inject
    CommentResource commentSubResource;

    @Inject
    private CommentServiceMock commentService;

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
    public List<Message> list(@BeanParam MessageFilterBean filterBean) {
        if(filterBean.getYear() > 0) {
            return messageService.getAllMessagesByYear(filterBean.getYear());
        }
        if(filterBean.getStart() >= 0 & filterBean.getSize() > 0) {
            return messageService.getAllMessagesPaginated(filterBean.getStart(), filterBean.getSize());
        }
        return messageService.getAllMessages();
    }

    /**
     * This is is the comment sub-resource of MessageResource. It delegates all calls to {messageId}/comments to the CommentResource.
     * The messageId can be access by the CommentResource using the @PathParam annotation.
     */
    @Path("/{messageId}/comments")
    public CommentResource getCommentResource() {
        return commentSubResource;
    }

    @GET
    @Path("/{messageId}/comments/listtest")
    public List<Comment> list(@PathParam("messageId") long messageId) {
        List<Comment> comments = commentService.listComments(messageId);
        return comments;
    }
}
