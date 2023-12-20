package yay.ensat.ma.server.Listeners;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import yay.ensat.ma.server.Events.MemberSavedEvent;
import yay.ensat.ma.server.models.Member;
import yay.ensat.ma.server.security.services.SecurityService;

@Component
public class MemberSavedListener implements ApplicationListener<MemberSavedEvent> {
    private SecurityService securityService;

    public MemberSavedListener( SecurityService securityService) {
        this.securityService = securityService;

    }

    @Override
    public void onApplicationEvent(MemberSavedEvent event) {
        Member member = (Member) event.getSource();
       securityService.saveNewUser(member);
    }
}
