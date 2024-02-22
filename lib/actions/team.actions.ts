'use server';

import { connectToDB } from "@/lib/db/index";
import Team, { ITeam } from "@/lib/db/models/team.model";

export async function createTeam({ chefId, supervisorId, place }: ITeam) {
  try {
    await connectToDB();
    
    const team = await Team.create({
        chefId,
        supervisorId,
        place,
        createdAt: new Date(),
    });
    return JSON.parse(JSON.stringify(team));
  } catch (error) {
    console.error('Failed to create team:', error);
    throw error;
  }
}

export async function getTeamByEmail(email: string) {
  try {
    await connectToDB();

    const team = await Team.findOne({ email: email })

    return JSON.parse(JSON.stringify(team));
  } catch (error) {
    console.error('Failed to get team:', error);
    throw error;
  }
}

export async function updateTeamByEmail(searchEmail: string, teamDetails: ITeam) {
  try {
    await connectToDB();

    const updateResult = await Team.findOneAndUpdate({ email: searchEmail }, {
      $set: teamDetails
    }).lean();

    return updateResult;
  } catch (error) {
    console.error('Failed to update team:', error);
    throw new Error('Error updating team details');
  }
}

export async function removeTeam(email: string) {
  try {
    await connectToDB();
    const result = await Team.deleteOne({ email: email });
    return result;
  } catch (error) {
    console.error('Failed to remove team:', error);
    throw error;
  }
}

