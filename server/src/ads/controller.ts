import { JsonController, Get, Post, Body, HttpCode} from 'routing-controllers'
import Ad from './entity'

@JsonController()
export default class MainController {

  @Get('/')
  async allAds() {
    const advertisements = await Ad.find()
    return { advertisements }
  }

  @Post('/sellerpage')
  @HttpCode(201)
  createPage(
    @Body() advertisement: Ad
  ) {
    return advertisement.save()
  }

}