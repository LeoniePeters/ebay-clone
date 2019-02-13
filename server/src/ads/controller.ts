import { JsonController, Get, Post, Param, Body, HttpCode} from 'routing-controllers'
import Ad from './entity'

@JsonController()
export default class MainController {

  @Get('/')
  async allAds() {
    const advertisements = await Ad.find()
    return { advertisements }
  }

  @Get('/ad/:id')
  getAd(
    @Param('id') id: number
    ) {
    return Ad.findOne(id)
  }

  @Post('/sellerpage')
  @HttpCode(201)
  createPage(
    @Body() advertisement: Ad
  ) {
    return advertisement.save()
  }

}