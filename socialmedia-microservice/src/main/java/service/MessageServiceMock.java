package service;


import persistence.DatabaseMock;
import persistence.model.Message;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class MessageServiceMock {

    Map<Long, Message> messages = DatabaseMock.getMessages();

    public MessageServiceMock() {
        messages.put(1L, new Message(1L, "first message", LocalDate.now(), "jan"));
        messages.put(2L, new Message(2L, "second message", LocalDate.now(), "jan2"));

    }

    public List<Message> getAllMessages() {
        return new ArrayList<>(messages.values());
    }

    public Message getMessageById(long id) {
        return messages.get(id);
    }
}
