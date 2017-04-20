// Copyright (c) 2017 VMware, Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Component, OnInit } from '@angular/core';

import { errorHandler } from '../../shared/shared.utils';
import { AlertType, ListMode } from '../../shared/shared.const';
import { MessageHandlerService } from '../../shared/message-handler/message-handler.service';
import { TopRepoService } from './top-repository.service';
import { Repository } from '../repository';

@Component({
    selector: 'top-repo',
    templateUrl: "top-repo.component.html",
    styleUrls: ['top-repo.component.css'],

    providers: [TopRepoService]
})
export class TopRepoComponent implements OnInit{
    topRepos: Repository[] = [];

    constructor(
        private topRepoService: TopRepoService,
        private messageHandlerService: MessageHandlerService
    ) { }

    public get listMode(): string {
        return ListMode.READONLY;
    }

    //Implement ngOnIni
    ngOnInit(): void {
        this.getTopRepos();
    }

    //Get top popular repositories
    getTopRepos() {
        this.topRepoService.getTopRepos()
            .then(repos => this.topRepos = repos )
            .catch(error => {
                this.messageHandlerService.handleError(error);
            })
    }
}