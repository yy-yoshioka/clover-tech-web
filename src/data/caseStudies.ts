export type CaseStudyIconName =
  | "map-pin"
  | "smartphone"
  | "chip"
  | "shield"
  | "bolt"
  | "flow";

export type CaseStudyCard = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  icon: CaseStudyIconName;
};

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  role: string;
  accent: "urban" | "secure";
  cards: CaseStudyCard[];
};

export type CaseStudiesContent = {
  caption: string;
  title: string;
  subtitle: string;
  cases: CaseStudy[];
};

export type CaseStudiesCta = {
  label: string;
  href: string;
};

export type CaseStudyArchiveContent = {
  caption: string;
  title: string;
  subtitle: string;
};

export type CaseStudyArchiveItem = {
  focus: string;
  title: string;
  summary: string;
  tags: string[];
};

export const caseStudies: CaseStudiesContent = {
  caption: "Selected Technical Case Studies",
  title: "社会的インパクトのある複雑な課題を、技術の力で解決した実績",
  subtitle: "社名は伏せ、どのようなシステムを構築したかにフォーカスしています。",
  cases: [
    {
      id: "case-urbanx",
      title: "AIとGIS（地図情報）を活用した社会インフラ点検プラットフォーム",
      description:
        "車載カメラやスマートフォンで撮影した道路画像をAIが解析し、損傷箇所を自動検知する自治体向けSaaSの開発。大量の画像データと地図情報（GIS）をブラウザ上で高速に描画するダッシュボード、および現場作業員向けのモバイルアプリ構築を担当しました。",
      role: "役割: 「AI × 地図データ」の高度なフロントエンド・アプリ開発",
      accent: "urban",
      cards: [
        {
          eyebrow: "Map & Data Visualization",
          title: "大規模地図データの高速描画",
          description:
            "Mapbox/Leafletを活用し、数万件規模の損傷データや点検ルートを地図上にレイテンシなく描画。Canvasを用いたカスタムレイヤー実装により、直感的なデータ可視化を実現しました。",
          tags: ["React", "GIS", "Mapbox"],
          icon: "map-pin",
        },
        {
          eyebrow: "Mobile App with AI",
          title: "エッジAI連携アプリの開発",
          description:
            "走行中にリアルタイムで画像収集を行うネイティブアプリを開発。不安定な通信環境下でもデータを損なわないオフラインファーストな同期設計と、GPS精度の最適化を行いました。",
          tags: ["React Native", "Offline-First"],
          icon: "smartphone",
        },
        {
          eyebrow: "UI/UX for Non-Tech",
          title: "現場目線のUIデザイン",
          description:
            "ITに不慣れな現場作業員でも迷わず操作できる「ワンタップ」主体のUIを設計。複雑な管理機能をシンプルに抽象化し、自治体業務のDXを加速させました。",
          tags: ["UI/UX", "Design", "Accessibility"],
          icon: "chip",
        },
      ],
    },
    {
      id: "case-simpleform",
      title: "金融・行政水準のリスク管理・法人審査SaaS",
      description:
        "法人・個人の実在性確認（KYB/KYC）とコンプライアンスチェックを完全自動化するプラットフォームの開発。金融機関も採用する厳しいセキュリティ要件の下、複雑な審査ロジックと外部データ連携基盤を構築しました。",
      role: "役割: 「セキュリティ × ドメインロジック」の堅牢なバックエンド・アーキテクチャ",
      accent: "secure",
      cards: [
        {
          eyebrow: "Complex Domain Logic",
          title: "審査エンジンの設計・実装",
          description:
            "公的登記データ、Webクローリング情報、反社データベースなど、構造の異なる多源データを統合。揺らぎのある情報を正規化し、高精度に同一性を判定するロジックを実装しました。",
          tags: ["Go", "Node.js", "Data Modeling"],
          icon: "flow",
        },
        {
          eyebrow: "High Performance API",
          title: "リアルタイム審査API",
          description:
            "複数の外部サービスへの問い合わせを並列化・非同期処理（Queue）することで、数秒以内での即時回答を実現。バースト的なアクセス増にも耐えうるスケーラブルな構成です。",
          tags: ["Microservices", "AWS"],
          icon: "bolt",
        },
        {
          eyebrow: "Enterprise Security",
          title: "監査ログと権限管理",
          description:
            "センシティブな情報を守るため、RBAC（ロールベースアクセス制御）および改ざん不可能な監査ログ基盤を整備。金融機関のセキュリティチェックリストに準拠した設計です。",
          tags: ["Security", "Compliance"],
          icon: "shield",
        },
      ],
    },
  ],
};

export const caseStudiesCta: CaseStudiesCta = {
  label: "他の事例を見る",
  href: "/case-studies",
};

export const caseStudyArchiveContent: CaseStudyArchiveContent = {
  caption: "Case Study Archive",
  title: "その他の事例",
  subtitle: "非公開案件を中心に、業界ごとの技術課題に対してどのように設計・実装したかをまとめています。",
};

export const caseStudyArchive: CaseStudyArchiveItem[] = [
  {
    focus: "Data Platform / Forecasting",
    title: "需要予測と在庫最適化のデータ基盤",
    summary:
      "複数チャネルの販売データを統合し、予測モデルに投入するETLと特徴量基盤を整備。運用を見据えたジョブ監視とデータ品質チェックを実装しました。",
    tags: ["Python", "Airflow", "BigQuery"],
  },
  {
    focus: "Logistics / Optimization",
    title: "物流ネットワークの配車最適化システム",
    summary:
      "制約条件の多い配車計画を自動化するため、最適化アルゴリズムと管理画面を実装。計算結果の可視化と運用フィードバックで精度を改善しました。",
    tags: ["Go", "PostgreSQL", "GCP"],
  },
  {
    focus: "RevOps / CRM",
    title: "B2B営業SaaSのスコアリング基盤",
    summary:
      "行動ログと企業属性を結合し、商談化確度を可視化するスコアリング基盤を構築。既存CRMとの同期と権限制御を設計しました。",
    tags: ["TypeScript", "Node.js", "Snowflake"],
  },
  {
    focus: "GovTech / Integration",
    title: "行政向けデータ連携APIハブ",
    summary:
      "複数システムのデータを標準化し、外部連携を支えるAPIゲートウェイを実装。監査ログとアクセス制御により安全性を担保しました。",
    tags: ["API Gateway", "Terraform", "AWS"],
  },
];
