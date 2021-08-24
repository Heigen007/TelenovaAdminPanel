<template>
  <b-card
    v-if="Object.keys(blogEdit).length"
    class="blog-edit-wrapper"
  >

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 1
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl2"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl3"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 380x220, image should be with text on it</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl1"
                    v-model="blogFile"
                    accept=".jpg, .png, .gif, .jpeg"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer"
                  />
                </div>
                <b-form-group
                  label="Product Id"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo1.Id'
                    id="basicInput"
                    placeholder="Product Id"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo1.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="FirstReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createFirstPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 2
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl4"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl5"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl6"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 380x220, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl2"
                    v-model="blogFile2"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer2"
                  />
                </div>
                <b-form-group
                  label="Bold Text Input"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo2.BoldText'
                    id="basicInput"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Light Text Input"
                  label-for="basicInput2"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo2.LightText'
                    id="basicInput2"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <!-- <b-form-group
                  label="Price Input(number only)"
                  label-for="basicInput3"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo2.PriceFrom'
                    id="basicInput3"
                    placeholder="Enter Price"
                  />
                </b-form-group> -->
                <b-form-group
                  label="Promo discount(%)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo2.Discount'
                    placeholder="Enter Discount"
                  />
                </b-form-group>
                <b-form-group
                  label="Product Id"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo2.Id'
                    id="basicInput"
                    placeholder="Product Id"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo2.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="SecondReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createSecondPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 3
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
              >
                <b-img
                  ref="refPreviewEl7"
                  :src="blogEdit.featuredImage"
                  height="170"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl8"
                  :src="blogEdit.featuredImage"
                  height="170"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewElExtra"
                  :src="blogEdit.featuredImage"
                  height="170"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 400x400, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl3"
                    v-model="blogFile3"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose file"
                    multiple
                    @input="inputImageRenderer3"
                  />
                </div>
                <br>
                <b-form-group
                  label="Big Promo Text(e.g. Week Deal)"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.BoldText'
                    id="basicInput"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Small Bold Promo Text(e.g. HURRY UP BEFORE OFFER WILL END)"
                  label-for="basicInput2"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.SmallText'
                    id="basicInput2"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Promo name"
                  label-for="basicInput2"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.name'
                    id="basicInput2"
                    placeholder="Enter Promo name"
                  />
                </b-form-group>
                <b-form-group
                  label="Id of Product of Promo(e.g. 7823467781342)"
                  label-for="basicInput3"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo3.Id'
                    id="basicInput3"
                    placeholder="Enter Id"
                  />
                </b-form-group>
                <b-form-group
                  label="Promo discount(%)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.Discount'
                    placeholder="Enter Discount"
                  />
                </b-form-group>
                <!-- <b-form-group
                  label="New Price of Product(Number)"
                  label-for="basicInput4"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.NewPrice'
                    id="basicInput4"
                    placeholder="Enter Price"
                  />
                </b-form-group>
                <b-form-group
                  label="Old Price of Product(Number)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.OldPrice'
                    placeholder="Enter Price"
                  />
                </b-form-group> -->
                <!-- <b-form-group
                  label="Available number of products(Number)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.AvNum'
                    placeholder="Enter Number"
                  />
                </b-form-group>
                <b-form-group
                  label="Already sold number of products(Number)"
                  class='my-2'
                >
                  <b-form-input
                    type='number'
                    v-model='Promo3.AlrNum'
                    placeholder="Enter Number"
                  />
                </b-form-group> -->
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo3.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="ThirdReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createThirdPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 4
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap; flex-direction: column"
              >
                <b-img
                  ref="refPreviewEl9"
                  :src="blogEdit.featuredImage"
                  height="100"
                  width="300"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <br>
                <b-img
                  ref="refPreviewEl10"
                  :src="blogEdit.featuredImage"
                  height="100"
                  width="300"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <br>
                <b-img
                  ref="refPreviewEl11"
                  :src="blogEdit.featuredImage"
                  height="100"
                  width="300"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 1200x150, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl5"
                    v-model="blogFile5"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer5"
                  />
                </div>
                <b-form-group
                  label="Bold Text Input"
                  label-for="basicInput"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo4.BoldText'
                    id="basicInput"
                    placeholder="Enter Text"
                  />
                </b-form-group>
                <b-form-group
                  label="Second-tier Category Name"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo4.CategoryName'
                    placeholder="Category Name"
                  />
                </b-form-group>
                <b-form-group
                  label="Minimum price"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo4.MinPrice'
                    placeholder="Minimum price"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo4.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="FourthReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createFourthPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 5
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl12"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl13"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl14"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 330x360, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl6"
                    v-model="blogFile6"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer6"
                  />
                </div>
                <b-form-group
                  label="Product Id"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo5.Id'
                    placeholder="Id"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo5.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="FifthReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createFifthPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 6
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl15"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl16"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl17"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 210x166, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl7"
                    v-model="blogFile7"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer7"
                  />
                </div>
                <b-form-group
                  label="Second-tier Category Name"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo6.CategoryName'
                    placeholder="Category Name"
                  />
                </b-form-group>
                <b-form-group
                  label="Bold Text"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo6.BoldText'
                    placeholder="Text"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo6.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="SixthReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createSixthPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Promo 7
            </h4>
            <b-media
              no-body
              vertical-align="center"
              style="flex-wrap:wrap"
            >
              <b-media-aside
                style="flex-wrap: wrap;"
              >
                <b-img
                  ref="refPreviewEl18"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl19"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
                <b-img
                  ref="refPreviewEl20"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body
                style="min-width:200px"
              >
                <small class="text-muted">Required image resolution 210x166, image should be without text on it, write the promo text down below</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                  <b-col
                    md="6"
                    xl="4"
                    class="mb-1"
                  >
                  </b-col>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl8"
                    v-model="blogFile8"
                    accept=".jpg, .png, .gif"
                    multiple
                    placeholder="Choose file"
                    @input="inputImageRenderer8"
                  />
                </div>
                <b-form-group
                  label="Second-tier Category Name"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo7.CategoryName'
                    placeholder="Category Name"
                  />
                </b-form-group>
                <b-form-group
                  label="Bold Text Input"
                  class='my-2'
                >
                  <b-form-input
                    v-model='Promo7.BoldText'
                    placeholder="Tetx"
                  />
                </b-form-group>
                <b-form-group>
                  <h5 class="font-weight-bold">
                    Time of Promo Ending
                  </h5>
                  <flat-pickr
                    v-model="Promo7.dateDefault"
                    class="form-control"
                  />
                </b-form-group>
                <b-col
                  cols="12"
                  class="mt-50"
                  style="padding-left: 0"
                >
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="SixthReset"
                  >
                    Clear
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    class="ml-1"
                    @click="createSeventhPromo"
                  >
                    Create
                  </b-button>
                </b-col>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
      </b-row>
    </b-form>
    <!--/ form -->
  </b-card>
</template>
<script>

import flatPickr from 'vue-flatpickr-component'
import {
  BCard, BMedia, BCardText, BMediaAside, BMediaBody, BForm, BRow, BCol, BFormGroup, BFormInput, BImg, BFormFile, BLink, BButton, BFormDatepicker
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
  components: {
    BCard,
    BMedia,
    BCardText,
    BMediaAside,
    BMediaBody,
    BForm,
    BLink,
    BImg,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
    BFormDatepicker,
    flatPickr
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Promo1: {},
      Promo2: {},
      Promo3: {},
      Promo4: {},
      Promo5: {},
      Promo6: {},
      Promo7: {},
      blogEdit: {},
      blogFile: [],
      blogFile2: [],
      blogFile3: [],
      blogFile4: [],
      blogFile5: [],
      blogFile6: [],
      blogFile7: [],
      blogFile8: [],
      categoryOption: ['Fashion', 'Food', 'Gaming', 'Quote', 'Video'],
      statusOption: ['Published', 'Pending', 'Draft'],
      snowOption: {
        theme: 'snow',
      },
    }
  },
  created() {
    this.$http.get('/blog/list/data/edit').then(res => { this.blogEdit = res.data })
  },
  setup() {
    const refInputEl1 = ref(null)
    const refInputEl2 = ref(null)
    const refInputEl3 = ref(null)
    const refInputEl4 = ref(null)
    const refInputEl5 = ref(null)
    const refInputEl6 = ref(null)
    const refInputEl7 = ref(null)
    const refInputEl8 = ref(null)
    const refPreviewEl = ref(null)
    const refPreviewEl2 = ref(null)
    const refPreviewEl3 = ref(null)
    const refPreviewEl4 = ref(null)
    const refPreviewEl5 = ref(null)
    const refPreviewEl6 = ref(null)
    const refPreviewEl7 = ref(null)
    const refPreviewEl8 = ref(null)
    const refPreviewElExtra = ref(null)
    const refPreviewEl9 = ref(null)
    const refPreviewEl10 = ref(null)
    const refPreviewEl11 = ref(null)
    const refPreviewEl12 = ref(null)
    const refPreviewEl13 = ref(null)
    const refPreviewEl14 = ref(null)
    const refPreviewEl15 = ref(null)
    const refPreviewEl16 = ref(null)
    const refPreviewEl17 = ref(null)
    const refPreviewEl18 = ref(null)
    const refPreviewEl19 = ref(null)
    const refPreviewEl20 = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl1, base64 => { refPreviewEl.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl2.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl3.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer2 } = useInputImageRenderer(refInputEl2, base64 => { refPreviewEl4.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl5.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl6.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer3 } = useInputImageRenderer(refInputEl3, base64 => { refPreviewEl7.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl8.value.src = base64[1] || "/img/03.ada37056.jpg",  refPreviewElExtra.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer5 } = useInputImageRenderer(refInputEl5, base64 => { refPreviewEl9.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl10.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl11.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer6 } = useInputImageRenderer(refInputEl6, base64 => { refPreviewEl12.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl13.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl14.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer7 } = useInputImageRenderer(refInputEl7, base64 => { refPreviewEl15.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl16.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl17.value.src = base64[2] || "/img/03.ada37056.jpg" })
    const { inputImageRenderer8 } = useInputImageRenderer(refInputEl8, base64 => { refPreviewEl18.value.src = base64[0] || "/img/03.ada37056.jpg",  refPreviewEl19.value.src = base64[1] || "/img/03.ada37056.jpg", refPreviewEl20.value.src = base64[2] || "/img/03.ada37056.jpg" })


    return {
      refInputEl1,
      refInputEl2,
      refInputEl3,
      refInputEl4,
      refInputEl5,
      refInputEl6,
      refInputEl7,
      refInputEl8,
      refPreviewEl,
      refPreviewEl2,
      refPreviewEl3,
      refPreviewEl4,
      refPreviewEl5,
      refPreviewEl6,
      refPreviewEl7,
      refPreviewEl8,
      refPreviewEl9,
      refPreviewEl10,
      refPreviewElExtra,
      refPreviewEl11,
      refPreviewEl12,
      refPreviewEl13,
      refPreviewEl14,
      refPreviewEl15,
      refPreviewEl16,
      refPreviewEl17,
      refPreviewEl18,
      refPreviewEl19,
      refPreviewEl20,
      inputImageRenderer,
      inputImageRenderer2,
      inputImageRenderer3,
      inputImageRenderer5,
      inputImageRenderer6,
      inputImageRenderer7,
      inputImageRenderer8
    }
  },
  methods: {
    FirstReset(){
      this.blogFile = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl2"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl3"].src = this.blogEdit.featuredImage
      });
    },
    SecondReset(){
      this.blogFile2 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl4"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl5"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl6"].src = this.blogEdit.featuredImage
      });
    },
    ThirdReset(){
      this.blogFile3  = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl7"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl8"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewElExtra"].src = this.blogEdit.featuredImage
      });
    },
    FourthReset(){
      this.blogFile5 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl9"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl10"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl11"].src = this.blogEdit.featuredImage
      });
    },
    FifthReset(){
      this.blogFile6 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl12"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl13"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl14"].src = this.blogEdit.featuredImage
      });
    },
    SixthReset(){
      this.blogFile7 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl15"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl16"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl17"].src = this.blogEdit.featuredImage
      });
    },
    SeventhReset(){
      this.blogFile8 = {}
      this.$nextTick(() => {
        this.$refs["refPreviewEl18"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl19"].src = this.blogEdit.featuredImage
        this.$refs["refPreviewEl20"].src = this.blogEdit.featuredImage
      })
    },
    createFirstPromo() {
      var date = this.Promo1.dateDefault?.split('-') || null
      const formData = new FormData()
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      this.blogFile.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('typeOfPromo', 1)
      formData.append('productKaspiId', this.Promo1.Id)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', 0)
      this.createFinalPromo(formData)
    },
    createSecondPromo() {
      var date = this.Promo2.dateDefault?.split('-') || null
      var formData = new FormData()
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      this.blogFile2.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('smallPromoText', this.Promo2.LightText)
      formData.append('bigPromoText', this.Promo2.BoldText)
      formData.append('typeOfPromo', 2)
      formData.append('productKaspiId', this.Promo2.Id)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', this.Promo2.Discount)
      this.createFinalPromo(formData)
    },
    createThirdPromo() {
      var date = this.Promo3.dateDefault?.split('-') || null
      var formData = new FormData()
      this.blogFile3.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      formData.append('smallPromoText', this.Promo3.SmallText)
      formData.append('bigPromoText', this.Promo3.BoldText)
      formData.append('typeOfPromo', 3)
      formData.append('productKaspiId', this.Promo3.Id)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', this.Promo3.Discount)
      formData.append('name', this.Promo3.name)
      this.createFinalPromo(formData)
    },
    createFourthPromo() {
      var date = this.Promo4.dateDefault?.split('-') || null
      var formData = new FormData()
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      this.blogFile5.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('bigPromoText', this.Promo4.BoldText)
      formData.append('typeOfPromo', 4)
      formData.append('categoryName', this.Promo4.CategoryName)
      formData.append('timeOfPromoEnding', date)
      formData.append('minPrice', this.Promo4.MinPrice)
      formData.append('sale', 0)
      this.createFinalPromo(formData)
    },
    createFifthPromo() {
      var date = this.Promo5.dateDefault?.split('-') || null
      var formData = new FormData()
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      this.blogFile6.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('typeOfPromo', 5)
      formData.append('productKaspiId', this.Promo5.Id)
      formData.append('sale', 0)
      formData.append('timeOfPromoEnding', date)
      this.createFinalPromo(formData)
    },
    createSixthPromo() {
      var date = this.Promo6.dateDefault?.split('-') || null
      var formData = new FormData()
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      this.blogFile7.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('bigPromoText', this.Promo6.BoldText)
      formData.append('typeOfPromo', 6)
      formData.append('sale', 0)
      formData.append('categoryName', this.Promo6.CategoryName)
      formData.append('timeOfPromoEnding', date)
      this.createFinalPromo(formData)
    },
    createSeventhPromo() {
      var date = this.Promo7.dateDefault?.split('-') || null
      var formData = new FormData()
      if(date) date = new Date(Number(date[0]),Number(date[1] - 1),Number(date[2])).toISOString()
      this.blogFile8.slice(0,3).forEach(file => {
        formData.append('files', file)
      })
      formData.append('bigPromoText', this.Promo7.BoldText)
      formData.append('typeOfPromo', 7)
      formData.append('categoryName', this.Promo7.CategoryName)
      formData.append('timeOfPromoEnding', date)
      formData.append('sale', 0)
      this.createFinalPromo(formData)
    },
    createFinalPromo(obj) {
      console.log(1);
      if(obj.get('files') == null) {
        Swal.fire(
          'Error!',
          'Please, choose the photo!',
          'error'
        )
        return
      }
      if(obj.get('timeOfPromoEnding') == null) {
        Swal.fire(
          'Error!',
          'Please, choose the time of promo ending!',
          'error'
        )
        return
      }
      for (var pair of obj.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
      }
      axios.post('https://textforeva.ru/promoAction/', obj)
      .then( res => {
        console.log(res);
        Swal.fire(
          'Success!',
          'Promo has been created!',
          'success'
        )
        // setTimeout(() => location.reload(), 400);
      })
      .catch( err => {
        console.log(err);
        Swal.fire(
          'Error!',
          'Some error occurred',
          'error'
        )
      })
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/pages/page-blog.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
