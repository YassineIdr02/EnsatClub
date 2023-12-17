package yay.ensat.ma.server.Events;

import org.springframework.context.ApplicationEvent;

public class ClubSavedEvent extends ApplicationEvent {
    public ClubSavedEvent(Object source) {
        super(source);
    }
}
