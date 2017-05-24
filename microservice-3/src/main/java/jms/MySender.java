package jms;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import javax.naming.*;
import javax.jms.*;

/**
 * Created by myuser on 23.05.2017.
 */
public class MySender {

    public void send (String queueMessage) {
        try { //Create and start connection

            InitialContext ctx=new InitialContext();
            QueueConnectionFactory f=(QueueConnectionFactory)ctx.lookup("jms/MeldungFactory");
            QueueConnection con=f.createQueueConnection();
            con.start();
            //2) create queue session
            QueueSession ses=con.createQueueSession(false, Session.AUTO_ACKNOWLEDGE);
            //3) get the Queue object
            Queue t=(Queue)ctx.lookup("jms/queue/MeldungQueue");
            //4)create QueueSender object
            QueueSender sender=ses.createSender(t);
            //5) create TextMessage object
            TextMessage msg=ses.createTextMessage();

            msg.setText(queueMessage);
            sender.send(msg);
            System.out.println("Message successfully sent.");

            con.close();
            }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}
