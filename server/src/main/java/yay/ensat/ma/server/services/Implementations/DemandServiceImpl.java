package yay.ensat.ma.server.services.Implementations;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.dtos.MemberDTO;
import yay.ensat.ma.server.models.Demand;
import yay.ensat.ma.server.repositories.DemandRepository;
import yay.ensat.ma.server.services.Interfaces.DemandService;
import yay.ensat.ma.server.services.Interfaces.MemberService;

import java.util.List;

@Service
@Transactional
public class DemandServiceImpl implements DemandService {
    private DemandRepository demandRepository;
    private MemberService memberService;

    public DemandServiceImpl(DemandRepository demandRepository, MemberService memberService) {
        this.demandRepository = demandRepository;
        this.memberService = memberService;
    }

    @Override
    public void newDemand (Demand demand)
    {
        demandRepository.save(demand);
    }

    @Override
    public void acceptDemand (Long demand_id){
        Demand demand = demandRepository.findById(demand_id).orElse(null);
        demand.setStatus("Accepted");
        demandRepository.save(demand);
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setName(demand.getName());
        memberDTO.setRole(demand.getRole());
        memberDTO.setEmail(demand.getEmail());
        memberService.saveMember(memberDTO,demand.getClubId());
    }

    @Override
    public void declineDemand(Long demand_id) {
        Demand demand = demandRepository.findById(demand_id).orElse(null);
        demand.setStatus("Declined");
        demandRepository.save(demand);
    }

    @Override
    public List<Demand> alldemands(Long club_id) {
        List<Demand> demands = demandRepository.findByClubId(club_id);
        return demands;
    }

    @Override
    public List<Demand> acceptedDemands(Long club_id){
       List<Demand> demands = demandRepository.findByClubIdAndAndStatus(club_id,"Accepted");
        return demands;

    }

    @Override
    public List<Demand> declinedDemands(Long club_id){
        List<Demand> demands = demandRepository.findByClubIdAndAndStatus(club_id,"Declined");
        return demands;
    }

    @Override
    public List<Demand> waitingDemands (Long club_id){
       List<Demand> demands = demandRepository.findByClubIdAndAndStatus(club_id,"Waiting");
       return demands;
    }


}
