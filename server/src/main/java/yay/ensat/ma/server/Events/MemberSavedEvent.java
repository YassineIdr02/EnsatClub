package yay.ensat.ma.server.Events;

import org.springframework.context.ApplicationEvent;

public class MemberSavedEvent extends ApplicationEvent {
    public MemberSavedEvent(Object source) {
        super(source);
    }
}
