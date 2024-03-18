'use server';

import { connectToDB } from "@/lib/db/index";
import Team, { ITeam } from "@/lib/db/models/team.model";

export async function createTeams(teams: ITeam[]) {
  try {
    await connectToDB();
    teams.forEach(async (teamInfo) => {
      const team = await createTeam(teamInfo);
      return JSON.parse(JSON.stringify(team));
    })
    console.log('Created team');
  } catch (error) {
    console.error('Failed to create teams:', error);
    throw error;
  }
}

export async function createTeam({ sg, theme, supervisor, chef, place, members }: ITeam) {
  try {
    await connectToDB();

    const team = await Team.create({
      sg,
      theme,
      supervisor,
      members,
      chef,
      place,
      createdAt: new Date(),
    });
    console.log('Created team');
    return JSON.parse(JSON.stringify(team));
  } catch (error) {
    console.error('Failed to create team:', error);
    throw error;
  }
}

export async function getTeam(teamId: string) {
  try {
    await connectToDB();

    const team = await Team.findOne({ _id: teamId })

    return JSON.parse(JSON.stringify(team));
  } catch (error) {
    console.error('Failed to get team:', error);
    throw error;
  }
}

export async function getTeamByChef(chef: string) {
  try {
    await connectToDB();

    const team = await Team.findOne({ chef })

    return JSON.parse(JSON.stringify(team));
  } catch (error) {
    console.error('Failed to get team:', error);
    throw error;
  }
}

export async function updateTeam(_id: string, teamDetails: ITeam) {
  try {
    await connectToDB();

    const updateResult = await Team.findOneAndUpdate({ _id }, {
      $set: teamDetails
    }).lean();

    return updateResult;
  } catch (error) {
    console.error('Failed to update team:', error);
    throw new Error('Error updating team details');
  }
}

export async function removeTeam(_id: string) {
  try {
    await connectToDB();
    const result = await Team.deleteOne({ _id });
    return result;
  } catch (error) {
    console.error('Failed to remove team:', error);
    throw error;
  }
}

