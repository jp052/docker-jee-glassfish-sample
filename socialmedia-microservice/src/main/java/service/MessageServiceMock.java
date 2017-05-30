package service;


import persistence.DatabaseMock;
import persistence.model.Message;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

public class MessageServiceMock {

    Map<Long, Message> messages = DatabaseMock.getMessages();

    public MessageServiceMock() {
        messages.put(1L, new Message(1L, "first message", "jan"));
        messages.put(2L, new Message(2L, "second message", "jan2"));
    }

    public List<Message> getAllMessages() {
        return new ArrayList<>(messages.values());
    }

    public List<Message> getAllMessagesByYear(int year) {
        List<Message> messagesForYear = new ArrayList<>();
        Calendar cal = Calendar.getInstance();
        for(Message message : messages.values()) {
            cal.setTime(message.getCreated());
            if(cal.get(Calendar.YEAR) == year) {
                messagesForYear.add(message);
            }
        }
        return messagesForYear;
    }

    public List<Message> getAllMessagesPaginated(int start, int size) {
        ArrayList<Message> list = new ArrayList<>(messages.values());
        if(start + size > list.size()) {
            return new ArrayList<Message>();
        }
        return list.subList(start, start + size);
    }

    public Message getMessageById(long id) {
        return messages.get(id);
    }

    public Message addMessage(Message message) {
        message.setId(messages.size() + 1);
        messages.put(message.getId(), message);
        return message;
    }

    public Message deleteMessage(long id) {
        Message deletedMessage = messages.remove(id);
        return deletedMessage;
    }

    public Message updateMessage(Message message) {
        if(message.getId() <= 0) {
            return null;
        }

        messages.put(message.getId(), message);
        return message;
    }
}
