import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule, MaterialDesignModule } from '@iote/bricks-angular';
import { MultiLangModule } from '@ngfi/multi-lang';

import { ConvlPageModule } from '@app/elements/layout/page-convl';
import { ChatsRouterModule } from '@app/features/convs-mgr/conversations/chats';

import { LabelsComponent } from './components/labels/labels.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryListItemComponent } from './components/story-list-item/story-list-item.component';
import { BotsListHeaderComponent } from './components/bots-list-header/bots-list-header.component';
import { BotsListAllCoursesComponent } from './components/bots-list-all-courses/bots-list-all-courses.component';
import { BotsListLatestCoursesComponent } from './components/bots-list-latest-courses/bots-list-latest-courses.component';

import { StoriesDashboardComponent } from './pages/stories-dashboard/stories-dashboard.component';

import { CreateBotModalComponent } from './modals/create-bot-modal/create-bot-modal.component';
import { DeleteBotModalComponent } from './modals/delete-bot-modal/delete-bot-modal.component';

import { NewStoryService } from './services/new-story.service';

import { ConvsMgrStoriesRouterModule } from './stories.router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    FlexLayoutModule,
    ConvlPageModule,
    MultiLangModule,
    ConvsMgrStoriesRouterModule,
    ChatsRouterModule,
  ],
  declarations: [
    StoriesDashboardComponent,
    StoryListItemComponent,
    StoryListComponent,
    CreateBotModalComponent,
    DeleteBotModalComponent,
    StoriesDashboardComponent,
    LabelsComponent,
    BotsListHeaderComponent,
    BotsListLatestCoursesComponent,
    BotsListAllCoursesComponent
  ],

  providers: [NewStoryService],
})
export class ConvsMgrStoriesHomeModule {}
