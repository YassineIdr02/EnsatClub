import React, { useEffect } from 'react';
import logo from '../../assets/EnsatClub.png';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllMembers, getMembers } from '../../features/Clubs/ClubSlice';

const MemberRow = ({ member }) => {
  return (
    <tr key={member.id}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{member.name}</div>
            <div className="text-sm opacity-50">ENSAT</div>
          </div>
        </div>
      </td>
      <td>{member.role}</td>
      <td>Purple</td>
      <th><button className="btn btn-ghost btn-xs">details</button></th>
    </tr>
  );
};

const Members = () => {
  const dispatch = useDispatch();
  const { clubId } = useParams();
  const members = useSelector(getAllMembers);

  useEffect(() => {
    if (!members.length) {
      dispatch(getMembers({ clubId }));
    }
  }, [dispatch, clubId]);

  const renderedMembers = members.map(member => <MemberRow key={member.id} member={member} />);

  return (
    <section className="container mx-auto pb-10">
      <div className="flex flex-row justify-between my-[2%] items-center">
        <h1 className="text-5xl font-semibold">Members</h1>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-extrabold">hhhh</h2>
          <div className="w-36 h-28 avatar rounded-full overflow-hidden">
            <img src={logo} alt="" className="object-cover w-full h-full" />
          </div>
          <p className="my-4 text-lg text-gray-500">Club president</p>
        </div>
      </div>
      <div>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className='max-h-5   overflow-y-auto'>
            {renderedMembers}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Members;
