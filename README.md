# BinanceDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Structure Folders
src/
└── app/
    ├── core/
    │   ├── services/
    │   │   └── finance.service.ts
    │   └── material.module.ts      # QUAN TRỌNG: Nơi tập trung import tất cả MatModules
    ├── shared/
    │   ├── components/
    │   │   ├── base-card/          # Dùng <mat-card> làm khung chung
    │   │   └── transaction-item/   # Một dòng hiển thị trong "Ghi chép gần đây"
    │   └── pipes/
    │       └── vnd-currency.pipe.ts
    ├── features/
    │   ├── dashboard/
    │   │   ├── components/
    │   │   │   ├── balance-card/    # Thẻ "Tổng số dư" (dùng mat-card-content)
    │   │   │   ├── chart-container/ # Bọc biểu đồ trong mat-card
    │   │   │   └── recent-history/  # Dùng <mat-list> và <mat-list-item>
    │   │   └── dashboard.component.ts
    │   ├── transaction-dialog/     # Component cho Dialog "Thêm ghi chép"
    │   └── ...
    ├── layout/
    │   ├── sidebar/                # Sử dụng <mat-nav-list> inside <mat-sidenav>
    │   ├── header/                 # Sử dụng <mat-toolbar>
    │   └── main-layout/            # Sử dụng <mat-sidenav-container>
    └── app.module.ts               # Import MaterialModule vào đây