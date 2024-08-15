import React from 'react';
import TeamMember from './TeamMembers';

interface TeamMember {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  socialIcons: string[];
}

interface TeamMembersGridProps {
  members: TeamMember[];
}

const TeamMembersGrid: React.FC<TeamMembersGridProps> = ({ members }) => {
  return (
    <div className="flex flex-wrap gap-10 items-start w-full max-w-screen-md mx-auto">
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamMembersGrid;
