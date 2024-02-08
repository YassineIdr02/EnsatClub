package yay.ensat.ma.server.services.Interfaces;

import org.springframework.stereotype.Service;
import yay.ensat.ma.server.models.Demand;

import java.util.List;

@Service
public interface DemandService {
    void newDemand(Demand demand);
    void acceptDemand (Long demand_id);
    void declineDemand (Long demand_id);
    List<Demand> alldemands (Long club_id);
    List<Demand> acceptedDemands(Long club_id);

    List<Demand> declinedDemands(Long club_id);

    List<Demand> waitingDemands(Long club_id);
}
