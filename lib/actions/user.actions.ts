'use server';

import { connectToDB } from "@/lib/db/index";
import User, { IUser } from "@/lib/db/models/user.model";

export async function createUser({ email, role, teamId }: IUser) {
  try {
    await connectToDB();
    const user = await User.create({
      email,
      role,
      team: teamId ? teamId : undefined,
      createdAt: new Date(),
    });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  try {
    await connectToDB();

    const user = await User.findOne({ email: email })

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error('Failed to get user:', error);
    throw error;
  }
}

export async function updateUserByEmail(searchEmail: string, userDetails: IUser) {
  try {
    await connectToDB();

    const updateResult = await User.findOneAndUpdate({ email: searchEmail }, {
      $set: userDetails
    }).lean();

    return updateResult;
  } catch (error) {
    console.error('Failed to update user:', error);
    throw new Error('Error updating user details');
  }
}

export async function removeUser(email: string) {
  try {
    await connectToDB();
    const result = await User.deleteOne({ email: email });
    return result;
  } catch (error) {
    console.error('Failed to remove user:', error);
    throw error;
  }
}

