package yay.ensat.ma.server.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import yay.ensat.ma.server.models.Demand;
import yay.ensat.ma.server.services.Interfaces.DemandService;

import java.util.List;

@RestController
public class DemandController {
    private DemandService demandService;

    public DemandController(DemandService demandService) {
        this.demandService = demandService;
    }

    @PostMapping("/newdemand")
    public void newDemand(Demand demand)
    {
        demandService.newDemand(demand);
    }

    @PostMapping("/acceptdemand/{demand_id}")
    public void acceptDemand(@PathVariable("demand_id") Long demand_id)
    {
        demandService.acceptDemand(demand_id);
    }

    @PostMapping("/declinedemand/{demand_id}")
    public void declineDemand(@PathVariable("demand_id") Long demand_id)
    {
        demandService.declineDemand(demand_id);
    }

    @GetMapping("/alldemands/{club_id}")
    public List<Demand> alldemand(@PathVariable("club_id") Long club_id){
        return demandService.alldemands(club_id);
    }

    @GetMapping("/accepteddemands/{club_id}")
    public List<Demand> accepteddemand(@PathVariable("club_id") Long club_id){
        return demandService.acceptedDemands(club_id);
    }

    @GetMapping("/declineddemands/{club_id}")
    public List<Demand> declineddemand(@PathVariable("club_id") Long club_id){
        return demandService.declinedDemands(club_id);
    }

    @GetMapping("/waitingdemands/{club_id}")
    public List<Demand> waitingdemand(@PathVariable("club_id") Long club_id){
        return demandService.waitingDemands(club_id);
    }
}
