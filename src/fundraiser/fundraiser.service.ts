import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateFundraiserInput } from './dto/create-fundraiser.input';
import { UpdateFundraiserInput } from './dto/update-fundraiser.input';
import { Fundraiser } from './entities/fundraiser.entity';

@Injectable()
export class FundraiserService {
  constructor(
    @InjectModel('Fundraisers')
    private readonly fundraiserModel: Model<Fundraiser>,
  ) {}

  //create new fundraiser

  async createFundraiser(
    createFundraiserInput: CreateFundraiserInput,
  ): Promise<Fundraiser> {
    const createFundraiser = await this.fundraiserModel.create(
      createFundraiserInput,
    );
    return createFundraiser.save();
  }

  async findAll(): Promise<Fundraiser[]> {
    const fundraisers = await this.fundraiserModel.find().exec();
    return fundraisers;
  }

  async findOne(id: String) {
    const fundraiser = await this.fundraiserModel.findOne({ _id: id }).exec();
    if (!fundraiser) {
      throw new NotFoundException(`Project ${id} not found`);
    }
    return fundraiser;
  }

  async updateFundraiser(
    id: String,
    updateFundraiserInput: UpdateFundraiserInput,
  ) {
    const updateFundraiser = await this.fundraiserModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateFundraiserInput },
        { new: true },
      )
      .exec();

    if (!updateFundraiser) {
      throw new NotFoundException(`Fundraiser ${id} not found`);
    }
    return updateFundraiser;
  }
}
