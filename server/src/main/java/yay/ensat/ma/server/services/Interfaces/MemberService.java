package yay.ensat.ma.server.services.Interfaces;


import yay.ensat.ma.server.dtos.MemberDTO;


public interface MemberService {
  MemberDTO saveMember(MemberDTO memberDTO, Long club_id);

}
