package resources;

import persistence.model.Comment;
import service.CommentServiceMock;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * This is a sub-resource of MessageResource.
 */
@Stateless
@Path("/") //the path is passed on from the parent MessageResource.
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
public class CommentResource {

    @Inject
    private CommentServiceMock commentService;

    @GET
    @Path("test/test")
    public String test() {
        return commentService.test();
    }

    @POST
    public Comment create(@PathParam("messageId") long messageId, Comment comment) {
        Comment createdComment = commentService.createComment(messageId, comment);
        return createdComment;
    }

    @GET
    @Path("/{commentId}")
    public String read(@PathParam("commentId") long id) {
        return "test comment read" + id;
    }

    @PUT
    @Path("/{commentId}")
    public Comment update(@PathParam("messageId") long messageId, @PathParam("commentId") long id, Comment comment) { //messageId can be used here,
        comment.setId(id);
        Comment updatedComment = commentService.updateComment(messageId, comment);
        return updatedComment;
    }

    @DELETE
    @Path("/{commentId}")
    public void delete(@PathParam("messageId") long messageId,
                       @PathParam("commentId") long id) {
        commentService.deleteComment(messageId, id);
    }

    @GET
    public List<Comment> list(@PathParam("messageId") long messageId) {
        List<Comment> comments = commentService.listComments(messageId);
        return comments;
    }

}
