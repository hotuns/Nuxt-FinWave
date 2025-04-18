# 路亚记功能模块设计

## 一、核心模块

### 1. 记录管理（Record）

- **快速记录**

  - 基础信息：时间、位置、鱼种
  - 媒体记录：照片（最多 3 张）
  - 装备关联：选择或创建组合
  - 场景标签：溪流/夜钓/船钓等

- **记录补充**
  - 气象数据：天气/水温
  - 照片追加：装备/鱼获特写
  - 文字备注：富文本编辑
  - 隐私设置：位置模糊/信息隐藏

### 2. 装备管理（Equipment）

- **组合创建**

  - 基础信息：名称、描述
  - 目标鱼种：多选预设列表
  - 适用场景：多选标签
  - 装备类型：钓竿/卷线器/饵/线
  - 视觉展示：照片上传（最多 5 张）

- **组合库**
  - 个人库：使用统计/成功率
  - 热门组合：社区验证数据
  - 模板系统：预设组合/个人模板

### 3. 数据分析（Analytics）

- **基础统计**

  - 成功率分析：鱼种/时间/装备
  - 装备效能：雷达图对比
  - 钓点热力：地图可视化
  - 时间规律：活跃度曲线

- **深度分析**
  - 气象关联：天气影响分析
  - 装备组合：效能对比
  - 趋势预测：基于历史数据

### 4. 社交功能（Social）

- **记录分享**

  - 智能卡片：照片+鱼种+组合
  - 轨迹动画：动态路径图
  - 隐私控制：敏感信息隐藏

- **社区互动**
  - 组合验证：点赞/收藏
  - 附近钓友：地图搜索
  - 挑战任务：场景化活动

## 二、辅助模块

### 1. 系统设置（Settings）

- **隐私控制**

  - 全局设置：默认公开性
  - 记录设置：单条覆盖
  - 位置模糊：自动偏移

- **数据管理**
  - 云端同步：跨设备支持
  - 数据备份：自动/手动
  - 离线支持：本地存储

### 2. 工具集（Tools）

- **地图工具**

  - 位置标记：钓点记录
  - 轨迹记录：动态路径
  - 离线地图：预加载支持

- **天气工具**
  - 实时天气：API 集成
  - 历史数据：气象分析
  - 水温预测：数据关联

## 三、技术实现

### 1. 第三方服务

- **地图服务**

  - 高德/Google Maps SDK
  - 离线地图支持
  - 位置模糊算法

- **天气服务**

  - 和风天气 API
  - OpenWeatherMap API
  - 历史数据存储

- **图片处理**
  - TensorFlow Lite 模型
  - 智能压缩（500KB/张）
  - 智能剪裁

### 2. 数据模型

```typescript
// 记录模型
interface Record {
  id: string;
  timestamp: Date;
  location: {
    lat: number;
    lng: number;
    isBlurred: boolean;
  };
  fishSpecies: string[];
  equipmentCombo: string;
  photos: string[];
  weather: WeatherData;
  notes: string;
  privacy: PrivacySettings;
}

// 装备组合模型
interface EquipmentCombo {
  id: string;
  name: string;
  targetSpecies: string[];
  scenarios: string[];
  equipment: {
    rod: string;
    reel: string;
    lure: string;
    line: string;
  };
  photos: string[];
  stats: {
    usageCount: number;
    successRate: number;
  };
}

// 分析数据模型
interface Analytics {
  successRate: {
    bySpecies: Record<string, number>;
    byTime: Record<string, number>;
    byEquipment: Record<string, number>;
  };
  heatmap: {
    locations: Array<{
      lat: number;
      lng: number;
      density: number;
    }>;
  };
  weatherImpact: Record<string, number>;
}
```

### 3. 存储结构

```
localStorage/
├── records/              # 垂钓记录
├── equipment/            # 装备组合
├── analytics/           # 分析数据
├── settings/            # 用户设置
└── sync/               # 同步状态
```

## 四、迁移策略

### 1. 数据模型迁移

- 交易记录 → 垂钓记录
- 类别管理 → 装备组合
- 数据分析 → 统计功能
- 笔记系统 → 记录补充

### 2. 组件迁移

- 表单组件：记录/装备表单
- 列表组件：记录/装备列表
- 图表组件：分析可视化
- 导航组件：通用导航

### 3. 功能迁移

- 本地存储：数据持久化
- 状态管理：全局状态
- 路由系统：页面导航
- 主题系统：UI 风格

## 五、开发计划

### 第一阶段：基础框架

1. 项目初始化
2. 基础组件迁移
3. 路由配置
4. 状态管理

### 第二阶段：核心功能

1. 记录管理系统
2. 装备管理系统
3. 数据分析系统
4. 地图集成

### 第三阶段：特色功能

1. 天气系统
2. 社交功能
3. 离线支持
4. 数据同步

### 第四阶段：优化完善

1. 性能优化
2. 用户体验
3. 测试验证
4. 文档完善
