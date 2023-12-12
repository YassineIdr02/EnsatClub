package yay.ensat.ma.server.services.Implementations;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.repositories.ClubRepository;
import yay.ensat.ma.server.services.Interfaces.ClubService;

@Service
@Transactional
public class ClubServiceImpl implements ClubService {
    private ClubRepository clubRepository;
    //private ClubMapper clubMapper;
    private ApplicationEventPublisher eventPublisher;

   /* public ClubServiceImpl(ClubRepository clubRepository, ClubMapper clubMapper, ApplicationEventPublisher eventPublisher) {
        this.clubRepository = clubRepository;
        this.clubMapper = clubMapper;
        this.eventPublisher = eventPublisher;
    }*/

   /* @Override
    public ClubDTO saveClub(ClubDTO clubDTO) {
        Club club = clubMapper.fromClubDTo(clubDTO);
        Club savedClub = clubRepository.save(club);
        eventPublisher.publishEvent(new ClubSavedEvent(savedClub));
        return clubMapper.fromClub(savedClub);
    }*/
}
