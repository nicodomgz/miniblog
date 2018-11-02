import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const APP_ROUTES: Routes = [

	{ path: '', component: PostsComponent},
	{ path: 'admin/posts/create', component: NewPostComponent},
	{ path: '**', pathMatch:'full',redirectTo:''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
