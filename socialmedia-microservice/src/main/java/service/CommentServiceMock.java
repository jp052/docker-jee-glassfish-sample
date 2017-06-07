package service;

import persistence.DatabaseMock;
import persistence.model.Comment;
import persistence.model.Message;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CommentServiceMock {

    Map<Long, Message> messages = DatabaseMock.getMessages();

    public String test() {
        return "payaraaaaaaaaaaaaaaa juhuu 4";
    }

    public Comment createComment(long messageId, Comment comment) {
        Map<Long, Comment> comments = getCommentsByMessageId(messageId);
        long commentId = comments.size() + 1;
        comment.setId(commentId);
        comments.put(commentId, comment);
        return comment;
    }

    public Comment readComment(long messageId, long commentId) {
        Map<Long, Comment> comments = getCommentsByMessageId(messageId);
        return comments.get(commentId);
    }

    public Comment updateComment(long messageId, Comment comment) {
        Map<Long, Comment> comments = getCommentsByMessageId(messageId);

        if (comment.getId() <= 0) {
            return null;
        }
        comments.put(comment.getId(), comment);
        return comment;
    }

    public void deleteComment(long messageId, long commentId) {
        Map<Long, Comment> comments = getCommentsByMessageId(messageId);
        comments.remove(commentId);
    }

    public List<Comment> listComments(long messageId) {
        Map<Long, Comment> comments = getCommentsByMessageId(messageId);
        return new ArrayList<>(comments.values());
    }

    private Map<Long, Comment> getCommentsByMessageId(long messageId) {
       return messages.get(messageId).getComments();
    }

}
