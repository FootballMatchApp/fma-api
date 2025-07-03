import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts() {
    return {
      statusCode: 200,
      message: 'Posts fetched successfully',
      data: [
        {
          postId: 1,
          teamId: 101,
          postedByPlayerId: 1001,
          pitchId: 55,
          receivingTeamId: null,
          matchTime: '2025-07-03T18:00:00Z',
          description: 'Chúng tôi tìm đối thủ vào tối thứ 7',
          lookingFor: 'Opponent',
          postStatus: 'Open',
        },
        {
          postId: 2,
          teamId: 102,
          postedByPlayerId: 1002,
          pitchId: 56,
          receivingTeamId: 103,
          matchTime: '2025-07-05T20:00:00Z',
          description: 'Cần thêm đồng đội cho trận đấu 7 người',
          lookingFor: 'Teammate',
          postStatus: 'WaitingConfirmation',
        },
      ],
    };
  }
}

