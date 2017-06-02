package jms;

import javax.annotation.Resource;
import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.ejb.MessageDrivenContext;
import javax.jms.*;
import javax.naming.InitialContext;

/**
 * Created by myuser on 23.05.2017.
 */
@MessageDriven(mappedName="jms/queue/MeldungQueue", activationConfig =  {
        @ActivationConfigProperty(propertyName = "acknowledgeMode",
                propertyValue = "Auto-acknowledge"),
        @ActivationConfigProperty(propertyName = "destinationType",
                propertyValue = "javax.jms.Queue")
})
public class MyReceiverImpl implements MessageListener {

    @Resource
    private MessageDrivenContext mdc;

    @Override
    public void onMessage(Message message) {
        try {
            String text = message.toString();
            // hier erfolgt die Verarbeitung
        } catch (Exception e) {
            e.printStackTrace();
            mdc.setRollbackOnly();
            throw new RuntimeException();
        }
    }
}
